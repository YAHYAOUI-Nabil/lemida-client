import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProduitAdmin = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  // Charger les articles depuis le backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://51.83.69.195:6000/articles");
        if (response.ok) {
          const data = await response.json();
          setCards(data);
        } else {
          console.error("Erreur lors du chargement des articles.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchCards();
  }, []);

  // Fonction pour supprimer un article
  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      try {
        const response = await fetch(
          `http://51.83.69.195:6000/articles/${id}`,
          { method: "DELETE" }
        );

        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }

        // Suppression réussie
        setCards(cards.filter((card) => card._id !== id));
        alert("Article supprimé avec succès.");
      } catch (error) {
        console.error("Erreur lors de la suppression de l'article :", error);
        alert("Erreur lors de la suppression. Veuillez réessayer.");
      }
    }
  };

  // Fonction pour modifier un article
  const handleEdit = (article) => {
    navigate("/edit", { state: { article } });
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl text-center text-green-700 font-bold mb-4">
        Nos produits
      </h2>
      {cards.length > 0 ? (
        <div className="pl-4 sm:pl-10 md:pl-20 lg:pl-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card border p-4 shadow rounded w-full max-w-xs"
            >
              {card.imageUrl && (
                <img
                  src={`http://51.83.69.195:6000${card.imageUrl}`}
                  alt={card.titre}
                  className="w-full h-auto rounded mb-4"
                />
              )}
              <h3 className="text-2xl font-bold mt-4">{card.titre}</h3>
              <p className="text-base font-semibold mt-4 text-gray-700">
                {card.description}
              </p>
              <p className="text-green-500 text-2xl font-bold mt-2">
                {card.prix} €
              </p>
              <p className="text-base font-semibold mt-4 text-gray-700">
                Quantité en stock: {card.quantite}{" "}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(card)}
                >
                  Modifier
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(card._id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Aucun article disponible.</p>
      )}
    </div>
  );
};

export default ProduitAdmin;
