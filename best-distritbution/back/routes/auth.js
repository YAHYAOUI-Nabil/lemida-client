const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import du modèle User

// Route pour l'inscription
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Validation des champs
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    try {
        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }

        // Créer un nouvel utilisateur
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Répondre avec succès
        res.status(201).json({ message: 'Utilisateur créé avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        res.status(500).json({ error: 'Erreur serveur, veuillez réessayer plus tard.' });
    }
});

module.exports = router;
