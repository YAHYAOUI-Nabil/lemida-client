const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
  cartItems: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  livraison: {
    type: String,
    default: 'En cours',
  }
});

module.exports = mongoose.model('Commande', commandeSchema);
