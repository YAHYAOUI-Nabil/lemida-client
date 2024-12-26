import React, { useEffect, useState } from "react";
import axios from "axios";

const Message = () => {
    const [messages, setMessages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://51.83.69.195:6000/api/messages');
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error('La réponse de l\'API n\'est pas un tableau.', response.data);
          setMessages([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des messages :', error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };
  
    const deleteMessage = async (id) => {
      try {
        await axios.delete(`http://51.83.69.195:6000/api/messages/${id}`);
        setMessages((prev) => prev.filter((message) => message._id !== id));
      } catch (error) {
        console.error('Erreur lors de la suppression du message :', error);
      }
    };
  
    React.useEffect(() => {
      fetchMessages();
    }, []);
  
    if (loading) {
      return <p>Chargement des messages...</p>;
    }
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Messages</h2>
      {messages.length > 0 ? (
        <ul className="space-y-4">
          {messages.map((message) => (
            <li
              key={message._id}
              className="flex justify-between items-center p-4 border rounded-md shadow-md bg-white"
            >
              <div>
              <p className="font-semibold">{message.name}</p>
              <p className="font-semibold">{message.telephone}</p>
              <p className="font-semibold">{message.email}</p>
                <p className="font-semibold text-blue-500">{message.content}</p>
                <p className="text-gray-500 text-sm"> <em>{new Date(message.createdAt).toLocaleString()}</em></p>
              </div>
              <button
                onClick={() => deleteMessage(message._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Aucun message trouvé.</p>
      )}
    </div>
  );
};

export default Message;
