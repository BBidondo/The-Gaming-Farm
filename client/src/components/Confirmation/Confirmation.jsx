import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CartContext,
  useShoppingCart,
} from "../../context/CartContext/CartContext";
import { getDetail } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";










export default function Confirmation() {
  const history = useHistory();

  let { cart, clearAllCart } = useShoppingCart();

  console.warn("LO QUE LLEGA DEL MENSAJE POR req.body → ", cart);

  // Hago el descuento de stock
  let discount = async () => {
    cart.map((el) => {
      let total = el.stock - el.quantity;

      return axios.put(`http://localhost:3001/products/${el.id}`, {
        stock: total,
      });
    });
  };
  setTimeout(() => {
    // Envia el correo de la compra hecha ! 🛍

    discount();
  }, 1000);

  setTimeout(() => {
    console.log("antes de limpiar el carrito", cart);
    clearAllCart();
    console.log("despues de limpiar el carrito", cart);
  }, 3000);

  setTimeout(async () => {
    history.push("/home");
  }, 4000);

  //Enviar correo al finalizar la compra ✅



  useEffect((e) => {
    axios.post("http://localhost:3001/MensajeCompra", cart);
  }, []);

  return (
    <div>
      <h1>Te tenemos buenas noticias !!!</h1>
      <h2>Tu compra fue realizada con éxito</h2>
      <p>
        Te enviaremos por mail el detalle de tu compra! esperamos lo disfrutes
      </p>

      <img
        src="https://i.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.webp"
        alt="alt"
      />
      <h5>Seras redirigido a la pagina principal en unos segundos ...</h5>
    </div>
  );
}
