import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import logo from "../assets/logo-BestDist.png";
import { useNavigate } from "react-router-dom";
const AddArticle = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("titre", data.titre);
    formData.append("description", data.description);
    formData.append("prix", data.prix);
    formData.append("image", data.image[0]);
    formData.append("quantite", data.quantite);

    try {
      const response = await axios.post(
        "http://51.83.69.195:6000/articles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Article ajouté avec succès !");
      reset();
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article : ", error); // Log de l'erreur
      setMessage(
        `Erreur lors de l'ajout de l'article: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  return (
    <div className="pt-12">
      <div className="p-4  bg-white border max-w-lg mx-auto shadow rounded">
        <h2 className="text-xl font-bold mb-4">Ajouter un nouvel article</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Titre</label>
            <input
              type="text"
              {...register("titre", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <input
              type="text"
              {...register("description", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Prix</label>
            <input
              type="number"
              step="0.01"
              {...register("prix", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quantité</label>
            <input
              type="number"
              step="0.01"
              {...register("quantite", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Ajouter
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default AddArticle;
