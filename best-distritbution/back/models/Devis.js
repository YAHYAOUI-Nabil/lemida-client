const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  article: { type: [String], required: true },  
  informations: { type: String, required: true },
  nomEntreprise: { type: String, required: true },  
  adresse: { type: String, required: true },
  codePostal: { type: String, required: true },
  siren: { 
    type: String, 
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{9}$/.test(v); // Vérifie que SIREN est composé de 9 chiffres
      },
      message: props => `${props.value} n'est pas un SIREN valide !`
    }
  },
  siret: { 
    type: String, 
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{14}$/.test(v); // Vérifie que SIRET est composé de 14 chiffres
      },
      message: props => `${props.value} n'est pas un SIRET valide !`
    }
  },
  createdAt: { type: Date, default: Date.now },
});

const Devis = mongoose.model('Devis', devisSchema);
module.exports = Devis;
