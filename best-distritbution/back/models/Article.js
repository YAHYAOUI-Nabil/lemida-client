const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String,  },
  prix: { type: Number, },
  imageUrl: { type: String, },
  quantite: { type: Number,  },
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
