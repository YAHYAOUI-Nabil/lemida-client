// routes/commande.js
const express = require('express');
const router = express.Router();
const Commande = require('./models/Commande');

// Obtenir toutes les commandes
router.get('/', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mettre à jour le champ livraison
router.patch('/:id', async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) return res.status(404).json({ message: 'Commande introuvable' });
    commande.livraison = req.body.livraison || commande.livraison;
    await commande.save();
    res.json(commande);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une commande
router.delete('/:id', async (req, res) => {
  try {
    await Commande.findByIdAndDelete(req.params.id);
    res.json({ message: 'Commande supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
