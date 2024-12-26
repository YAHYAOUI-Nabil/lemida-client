import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PowerIcon } from '@heroicons/react/24/solid';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token ou toute autre information d'authentification
    localStorage.removeItem('token'); // ou sessionStorage si tu utilises cela

    // Mettre à jour l'état d'authentification si tu utilises un contexte global ou un état local
    // Par exemple, avec un contexte : dispatch(logout()) 

    // Rediriger vers la page de connexion après la déconnexion
    navigate('/login');
  };

  return (
    <ListItem onClick={handleLogout}>
      <ListItemPrefix>
        <PowerIcon className="h-5 w-5" />
      </ListItemPrefix>
      Log Out
    </ListItem>
  );
};

export default Logout;
