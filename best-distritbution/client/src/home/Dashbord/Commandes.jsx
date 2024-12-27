import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import {
  Delete,
  CheckCircle,
  HourglassEmpty,
  Cancel,
} from "@mui/icons-material";

const Commandes = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchCommandes();
  }, []);

  const fetchCommandes = async () => {
    try {
      const response = await axios.get(
        "http://51.83.69.195:7000/api/commandes"
      ); // URL complète pour éviter des problèmes de proxy
      console.log("Réponse API :", response.data); // Vérifiez si les commandes sont bien reçues
      setCommandes(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des commandes :", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://51.83.69.195:7000/commandes/${id}`);
      setCommandes(commandes.filter((commande) => commande._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.patch(
        `http://51.83.69.195:7000/commandes/${id}`,
        { livraison: status }
      );
      setCommandes(
        commandes.map((commande) =>
          commande._id === id ? response.data : commande
        )
      );
    } catch (err) {
      console.error("Erreur lors de la mise à jour de la commande:", err);
    }
  };

  const renderStatus = (status) => {
    switch (status) {
      case "Livré":
        return (
          <Typography color="green">
            <CheckCircle /> Livré
          </Typography>
        );
      case "En cours":
        return (
          <Typography color="orange">
            <HourglassEmpty /> En cours
          </Typography>
        );
      case "Non livré":
        return (
          <Typography color="red">
            <Cancel /> Non livré
          </Typography>
        );
      default:
        return status;
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "green" }}>Etat de commande </TableCell>
            <TableCell sx={{ color: "green" }}>Nom & Prénom</TableCell>
            <TableCell sx={{ color: "green" }}>Email</TableCell>
            <TableCell sx={{ color: "green" }}>Téléphone</TableCell>
            <TableCell sx={{ color: "green" }}>Message</TableCell>
            <TableCell sx={{ color: "green" }}>Commande</TableCell>
            <TableCell sx={{ color: "green" }}>Total</TableCell>
            <TableCell sx={{ color: "green" }}>Date de la commande</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(commandes) && commandes.length > 0 ? (
            commandes.map((commande) => (
              <TableRow key={commande._id}>
                <TableCell>
                  <Select
                    value={commande.livraison}
                    onChange={(e) =>
                      handleStatusChange(commande._id, e.target.value)
                    }
                  >
                    <MenuItem value="Livré">Livré</MenuItem>
                    <MenuItem value="En cours">En cours</MenuItem>
                    <MenuItem value="Non livré">Non livré</MenuItem>
                  </Select>
                  <Box mt={1}>{renderStatus(commande.livraison)}</Box>
                </TableCell>
                <TableCell>
                  {commande.nom} {commande.prenom}
                </TableCell>
                <TableCell>{commande.email}</TableCell>
                <TableCell>{commande.telephone}</TableCell>
                <TableCell>{commande.message || "Aucun message"}</TableCell>
                <TableCell>
                  {Array.isArray(commande.cartItems) &&
                  commande.cartItems.length > 0 ? (
                    commande.cartItems.map((item, index) => (
                      <Box key={item._id || index}>
                        <Typography variant="body2">
                          {item.titre} quantité: {item.quantity}
                        </Typography>
                        <Typography variant="caption">
                          Total : {item.total} €
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body2">Aucun article</Typography>
                  )}
                </TableCell>

                <TableCell>{commande.totalPrice} €</TableCell>
                <TableCell>
                  {new Date(commande.date).toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </TableCell>

                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(commande._id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8}>Aucune commande disponible</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Commandes;
