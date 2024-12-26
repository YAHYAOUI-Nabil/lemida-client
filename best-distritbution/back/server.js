const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const Commande = require("./models/commande");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const User = require("./models/User");
const articleRoutes = require("./routes/articleRoutes");
const Devis = require("./models/Devis");
const Message = require("./models/Message");

// Configuration
const app = express();
app.use(cors());
const SECRET_KEY = "votreCleSecretePourJWT"; // Remplacez par une clé plus robuste

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Connexion à MongoDB
mongoose
  .connect("mongodb://mongodb:27017/best-distribution")
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Erreur de connexion à MongoDB :", error));

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res.status(401).json({ error: "Accès refusé, token manquant." });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Token invalide." });
    req.user = user;
    next();
  });
};

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Erreurs spécifiques à Multer
    return res.status(400).json({ message: `Erreur Multer : ${err.message}` });
  } else if (err) {
    // Autres erreurs
    console.error(err);
    return res.status(500).json({ message: "Erreur interne du serveur." });
  }
  next();
});

// Exemple : Route protégée
app.get("/adminDashboard", authenticateToken, (req, res) => {
  res.json({ message: `Bienvenue ${req.user.email} sur le tableau de bord.` });
});

// Routes inscription
app.use("/api/auth", authRoutes);

// Route de connexion
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validation des champs
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email et mot de passe sont requis." });
  }

  try {
    // Recherche l'utilisateur dans la base de données par email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "Utilisateur ou mot de passe incorrect." });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ error: "Utilisateur ou mot de passe incorrect." });
    }

    // Génération du token JWT
    const token = jwt.sign({ email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // Réponse avec le token
    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

// Routes pour ajouté un article
app.use("/articles", articleRoutes);

// Route pour enregistrer la commande
app.post("/api/commandes", async (req, res) => {
  try {
    const { nom, prenom, email, telephone, message, cartItems, totalPrice } =
      req.body;

    const newCommande = new Commande({
      nom,
      prenom,
      email,
      telephone,
      message,
      cartItems,
      totalPrice,
    });

    await newCommande.save();
    res.status(201).json({ message: "Commande enregistrée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la création de la commande:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Obtenir toutes les commandes
app.get("/api/commandes", async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.json(commandes); // Renvoie les commandes stockées dans la base de données
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des commandes" });
  }
});

// Mettre à jour le champ livraison
app.patch("/commandes/:id", async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande)
      return res.status(404).json({ message: "Commande introuvable" });
    commande.livraison = req.body.livraison || commande.livraison;
    await commande.save();
    res.json(commande);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une commande
app.delete("/commandes/:id", async (req, res) => {
  try {
    await Commande.findByIdAndDelete(req.params.id);
    res.json({ message: "Commande supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Enregistrer un message
app.post("/api/messages", async (req, res) => {
  try {
    const { name, telephone, email, content } = req.body;
    const newMessage = new Message({ name, telephone, email, content });
    await newMessage.save();
    res.status(201).json({ message: "Message enregistré avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement du message" });
  }
});

// Récupérer tous les messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des messages.", error });
  }
});

// Route pour supprimer un message
app.delete("/api/messages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "Message supprimé avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du message.", error });
  }
});

// Ajouter un devis
app.post("/api/devis", async (req, res) => {
  try {
    const newDevis = new Devis(req.body);
    await newDevis.save();
    res.status(201).json(newDevis);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de l'ajout du devis", error });
  }
});

// Récupérer tous les devis
app.get("/api/devis", async (req, res) => {
  try {
    const devis = await Devis.find();
    res.status(200).json(devis);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des devis", error });
  }
});

// Supprimer un devis
app.delete("/api/devis/:id", async (req, res) => {
  try {
    const devis = await Devis.findByIdAndDelete(req.params.id);
    if (!devis) return res.status(404).json({ message: "Devis non trouvé" });
    res.status(200).json({ message: "Devis supprimé" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du devis", error });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur démarré sur le port 3000");
});
