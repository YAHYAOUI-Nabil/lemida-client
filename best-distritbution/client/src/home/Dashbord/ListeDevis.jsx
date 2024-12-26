import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeDevis = () => {
  const [devisList, setDevisList] = useState([]);
  
  useEffect(() => {
    // Récupérer tous les devis
    axios.get("http://localhost:5001/api/devis")
      .then(res => {
        setDevisList(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("Une erreur est survenue lors de la récupération des devis");
      });
  }, []);

  const handleDelete = (id) => {
    // Supprimer un devis
    axios.delete(`http://localhost:5001/api/devis/${id}`)
      .then(res => {
        setDevisList(devisList.filter(devis => devis._id !== id)); // Retirer le devis de la liste
        alert("Le devis a été supprimé avec succès");
      })
      .catch(err => {
        console.log(err);
        alert("Une erreur est survenue lors de la suppression du devis");
      });
  };

  return (
    <section className="dark:bg-slate-800" id="liste-devis">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white">Liste des devis</h1>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {devisList.map((devis) => (
            <div key={devis._id} className="p-6 border border-gray-300 rounded-md dark:bg-dark dark:text-gray-300">
              <h2 className="text-xl font-semibold">{devis.firstName} {devis.lastName}</h2>
              <p> {devis.email}</p>
              <p>  {devis.mobileNumber}</p>
              <p className='text-green-700'> {devis.article}</p>
              <p className='text-black'> {devis.informations}</p>
              <p className="text-gray-500 text-sm"> <em>{new Date(devis.createdAt).toLocaleString()}</em></p>

              <button 
                onClick={() => handleDelete(devis._id)} 
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListeDevis;
