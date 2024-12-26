import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MdShoppingCart } from "react-icons/md";
const Cards = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [modalView, setModalView] = useState('cart');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const cardContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert('L\'email n\'est pas valide');
      return;
    }
  
    // Simple phone number validation (only digits and length of 10)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.telephone)) {
      alert('Le numéro de téléphone n\'est pas valide');
      return;
    }
  
    const orderData = {
      ...formData,
      cartItems: cart,
      totalPrice: calculateTotal(),
    };
  
    try {
      const response = await fetch('http://localhost:5001/api/commandes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        alert('Commande réussie');
        setCart([]);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          message: '',
        });
      } else {
        alert('Erreur lors de la commande');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de réseau');
    }
  };
  

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5001/articles");
        setCards(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };
    fetchArticles();
  }, []);

  const addToCart = (article, quantity) => {
    console.log("Ajout d'une commande :", article, "Quantité :", quantity);
    setCart((prevCart) => [
      ...prevCart,
      { ...article, quantity, total: article.prix * quantity },
    ]);
  };

  const removeFromCart = (index) => {
    console.log("Suppression de la commande à l'index :", index);
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    return total;
  };
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300, // Défilement vers la gauche de 300px
        behavior: 'smooth', // Pour un défilement fluide
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, // Défilement vers la droite de 300px
        behavior: 'smooth', // Pour un défilement fluide
      });
    }
  };
  return (
    <div className="py-10">
    <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Nos produits</h2>
    <div className="relative px-12 sm:px-14 lg:px-16">
        {/* Bouton pour défiler à gauche */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full z-10 hover:bg-green-700"
        >
          &lt;
        </button>

        {/* Conteneur des cartes avec 3 cartes visibles à la fois */}
        <div
          className="flex overflow-x-auto space-x-4 pb-4"
          ref={cardContainerRef}
        >
          {cards.map((card, index) => (
            <div className="flex-none w-96" key={card.id || index}>
              <CardItem card={card} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* Bouton pour défiler à droite */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full z-10 hover:bg-green-700"
        >
          &gt;
        </button>
      </div>

    {/* Bouton pour ouvrir la modal */}
    {cart.length > 0 && (
  <div className="fixed top-6 right-4">
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 shadow-lg relative"
      aria-label="Voir le panier"
    >
      <MdShoppingCart className=" w-10 h-auto" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cart.length}
        </span>
      )}
    </button>
  </div>
)}


    {/* Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          {modalView === 'cart' ? (
            <div>
              <h3 className="text-xl font-bold mb-4">Votre panier</h3>
              {cart.map((item, index) => (
                <div key={index} className="border-b py-2 flex justify-between">
                  <span>{item.titre} x {item.quantity}</span>
                  <span>{item.total} €</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 font-bold text-sm"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <p className="text-right font-bold mt-4">Total : {calculateTotal()} €</p>
              <button
  onClick={() => setModalView('form')}
  disabled={cart.length === 0}
  className={`mt-4 py-2 px-4 rounded-lg w-full ${
    cart.length === 0
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-green-600 hover:bg-green-700 text-white'
  }`}
>
  Passer commande
</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">Détails de la commande</h3>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 mb-4"
              />
               <input
                type="text"
                name="prenom"
                placeholder="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 mb-4"
              />
               <input
                type="text"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 mb-4"
              />
               <input
                type="text"
                name="telephone"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 mb-4"
              />
               <input
                type="text"
                name="message"
                placeholder="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 mb-4"
              />
              {/* Autres champs ici */}
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-full"
              >
                Commander
              </button>
            </form>
          )}

          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 text-red-500 hover:underline w-full text-center"
          >
            Fermer
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

const CardItem = ({ card, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border p-4 shadow rounded w-full h-full flex flex-col justify-between">
      {card.imageUrl && (
        <img
          src={`http://localhost:5001${card.imageUrl}`}
          alt={card.titre}
          className="w-full h-auto rounded mb-4"
        />
      )}
      <h3 className="text-2xl font-bold mt-4">{card.titre}</h3>
      <p className="text-base font-semibold mt-2 text-gray-700">{card.description}</p>
      <p className="text-green-500 text-2xl font-bold mt-2">{card.prix} €</p>
      <p className="text-base font-semibold mt-2 text-gray-700">Quantité: {card.quantite}</p>

      <div className="flex items-center space-x-2 mt-4">
        <button
          onClick={() => onAddToCart(card, quantity)}
          className="bg-green-600 text-white rounded-lg py-2 px-4 w-full sm:w-auto hover:bg-green-700"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Cards;
