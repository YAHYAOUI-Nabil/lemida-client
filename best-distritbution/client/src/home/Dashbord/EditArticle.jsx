import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');
  const [image, setImage] = useState(null);

  // Pré-remplir le formulaire en cas de modification
  useEffect(() => {
    if (location.state?.article) {
      const { titre, description, prix , quantite } = location.state.article;
      setTitre(titre);
      setDescription(description);
      setPrix(prix);
      setQuantite(quantite);
    }
  }, [location.state]);

  // Gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titre', titre);
    formData.append('description', description);
    formData.append('prix', prix);
    formData.append('quantite', quantite);
    if (image) formData.append('image', image);



    const url = location.state?.article
      ? `http://localhost:5001/articles/${location.state.article._id}`
      : 'http://localhost:5001/articles';
    const method = location.state?.article ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (response.ok) {
        alert(location.state?.article ? 'Article modifié avec succès.' : 'Article ajouté avec succès.');
        navigate('/Catalogue');
      } else {
        alert('Erreur lors de l\'envoi.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        {location.state?.article ? 'Modifier un article' : 'Ajouter un article'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Titre</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Description</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Prix</label>
          <input
            type="number"
            className="border w-full p-2 rounded"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Quantité en stock</label>
          <input
            type="number"
            className="border w-full p-2 rounded"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Image</label>
          <input
            type="file"
            className="border w-full p-2"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
          {location.state?.article ? 'Modifier' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
