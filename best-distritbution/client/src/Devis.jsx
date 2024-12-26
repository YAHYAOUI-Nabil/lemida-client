import React, { useState } from 'react';
import axios from 'axios';

const Devis = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    informations: '',
    article: []  // Ajout du champ article pour les cases à cocher
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData.article, value]  // Ajoute l'article sélectionné
          : formData.article.filter(item => item !== value)  // Supprime l'article désélectionné
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'Nom est requis.';
    if (!formData.lastName) tempErrors.lastName = 'Prénom est requis.';
    if (!formData.email) tempErrors.email = 'Email est requis.';
    if (!formData.mobileNumber) tempErrors.mobileNumber = 'N° de téléphone est requis.';
    if (!formData.informations) tempErrors.informations = 'Informations complémentaires sont requises.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("http://51.83.69.195:5001/api/devis", formData)
        .then(res => {
          console.log(res.data);
          alert("Votre demande a été envoyée avec succès");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            informations: '',
            article: []  // Réinitialise le champ article après envoi
          });
          setErrors({});
        }) 
        .catch(err => {

          if (err.response && err.response.data && err.response.data.errors) {
            const backendErrors = err.response.data.errors;
            let tempErrors = {};
            Object.keys(backendErrors).forEach((key) => {
              tempErrors[key] = backendErrors[key].message;
            });
            setErrors(tempErrors);
          } else {
            console.log(err);
            alert("Une erreur est survenue");
          }
        });
    }
  };
  return (
    <section className="dark:bg-slate-800" id="devis">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold text-green-700 dark:text-white pb-20">Demande de devis</h1>
        </div> 
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium leading-6 text-gray-900">N° de téléphone</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              autoComplete="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <fieldset>
              <legend className="block text-sm font-medium leading-6 text-gray-900">Choisissez un article :</legend>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="article"
                    value="Sac biodégradable 1   "
                    checked={formData.article.includes("Sac biodégradable 1   ")}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Sac biodégradable 1</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    name="article"
                    value="Sac biodégradable 2   "
                    checked={formData.article.includes("Sac biodégradable 2   ")}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Sac biodégradable 2</span>
                </label>
              </div>
            </fieldset>
          </div>
       
          
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="informations" className="block text-sm font-medium leading-6 text-gray-900">Informations complémentaires</label>
            <textarea
              id="informations"
              name="informations"
              rows="4"
              value={formData.informations}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.informations && <p className="text-red-500 text-xs">{errors.informations}</p>}
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <button type="submit" className="w-32 bg-green-800 text-white px-6 py-3 font-xl rounded-md">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Devis;
