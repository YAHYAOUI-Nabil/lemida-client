const express = require("express");
const multer = require("multer");
const path = require("path");
const Article = require("../models/Article");

const router = express.Router();

// Configuration Multer pour gérer les fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route pour ajouter un article
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("Corps de la requête :", req.body);
    console.log("Fichier reçu :", req.file);
    
    const { titre, description, prix, quantite } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Aucune image reçue" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const article = new Article({ titre, description, prix, imageUrl, quantite });
    await article.save();
    res.status(201).json({ message: "Article ajouté avec succès", article });
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout", error: error.message });
  }
});


// Route pour récupérer tous les articles
router.get("/", async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des articles", error });
    }
  });

// Route pour supprimer un article
router.delete('/:id', async (req, res) => {
    try {
      const articleId = req.params.id;
      console.log(`Suppression de l'article avec ID: ${articleId}`); // Vérifiez que l'ID est bien capturé
  
      // Recherche de l'article dans la base de données
      const article = await Article.findByIdAndDelete(articleId);
      
      if (!article) {
        return res.status(404).json({ message: 'Article non trouvé' });
      }
  
      res.status(200).json({ message: 'Article supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article :', error);
      res.status(500).json({ message: 'Erreur serveur lors de la suppression de l\'article' });
    }
  });
  
  
  
  // PUT : Modifier un article par ID
  router.put('/:id', upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const { titre, description, prix ,quantite } = req.body;
  
      // Recherche de l'article
      const article = await Article.findById(id);
      if (!article) {
        return res.status(404).json({ message: 'Article non trouvé' });
      }
  
      // Mise à jour des champs
      article.titre = titre || article.titre;
      article.description = description || article.description;
      article.prix = prix || article.prix;
      article.quantite = quantite || article.quantite;
  
      // Gestion de l'image
      if (req.file) {
        article.imageUrl = `/uploads/${req.file.filename}`; // Nouvelle image
      }
  
      // Sauvegarde des modifications
      await article.save();
  
      res.status(200).json({ message: 'Article mis à jour avec succès', article });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article :', error);
      res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de l\'article.' });
    }
  });


  

// Exporter le routeur
module.exports = router;
