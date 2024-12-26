const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  article: { type: [String], required: true },  
  informations: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Devis = mongoose.model('Devis', devisSchema);
module.exports = Devis;
