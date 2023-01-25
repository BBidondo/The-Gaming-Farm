import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { idUser } from "../../redux/actions";
import Fuego from "../Assets/fuego.png"

const LandingPage = () => {
  const dispatch = useDispatch
  // const google2 = useAuth0();

  // useEffect(() => {
  //   if(google2.isAuthenticated){dispatch(idUser(google2.user.email))} //This is a correct???
  // }, []);
  return (
    <>
      {/* <NavBar /> */}
      <div className="info-landing">
        <div className="container">
         
          <h1 className="tituloLanding">
            Enciende tu Experiencia de Juego con Nuestros Productos
          </h1>

           {/* <img  className="fuego" src={Fuego}  /> */}

          <p className="bienvenido">
           "Bienvenidos a TheGamingFarm! aquí podrás encontrar un cátalogo
            completo de las consolas más icónicas de las últimas décadas e 
            informarte de las novedades relacionadas al Mundo Gamer”
          </p>
          <NavLink to="/home" onClick={e => window.location.assign("http://localhost:3000/home")}>
            <button class="cssbuttons-io">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  
                </svg>{" "}
                Productos
              </span>
            </button>
          </NavLink>

          {/* <div className="img-control-container"></div> */}

          {/* LOGIN 👦🏻 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
