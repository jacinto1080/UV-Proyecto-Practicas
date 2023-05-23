import IconoFacebook from "../components/icono-image/facebook-blanco.svg";
import IconoInstagram from "../components/icono-image/instagram-blanco.svg";
import IconoTwitter from "../components/icono-image/twitter-blanco.svg";
import IconoEmail from "../components/icono-image/sobre-blanco.png";
import IconoWhatsapp from "../components/icono-image/whatsappVerde.svg";
import IconoFooter from "../components/icono-image/logo-madrid-1030x130.jpg";
import "./mainPage.css";

const MainPage = () => {
  return (
    <>
      <h1 className="main-title">Servicio municipal de LGTBIfobia</h1>
      <h2 className="texto">
      Servicio de asistencia jurídica y psicológica a víctimas de incidentes de LGTBIfobia en la ciudad de Madrid  </h2>
      <div className="main-container1">
        <div className="cajas1">
          <h1 className="main-text2">Informacion Importante</h1>
          <p className="main-text">
            Orientado a proporcionar asistencia psicológica a las víctimas de LGTBIfobia que contacten con el servicio, realizando una intervención individualizada en su caso. Entre otras, comprende las siguientes tareas:
            Preparación de la víctima para minimizar los efectos de la experiencia y reacciones de aparición posterior.
            Intervención psicológica para incrementar la organización cognitiva de la víctima y su entrenamiento en el manejo de la ansiedad.
           
          </p>
        </div>
        <div className="cajas0">
          <h1 className="main-text1">Contacto</h1>
          <a
            href="https://www.facebook.com/profile.php?id=100079658599308"
            target="_blank"
          >
            <img className="iconoContacto" src={IconoFacebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/madridcontralgtbifobia/"
            target="_blank"
          >
            <img
              className="iconoContacto"
              src={IconoInstagram}
              alt="instagram"
            />
          </a>
          <a href="https://twitter.com/Lgtbifobiamad" target="_blank">
            <img className="iconoContacto" src={IconoTwitter} alt="twitter" />
          </a>
          <a
            href="mailto:serviciolgtbifobia@imaginabienestar.com"
            target="_blank"
          >
            <img className="iconoContacto" src={IconoEmail} alt="sobre" />
          </a>
          <img
            className="iconoWhatsapp"
            src={IconoWhatsapp}
            alt="IconoWhatsapp"
          />
          
          <p><a className="main-text-number" href="https://api.whatsapp.com/send?phone=34623533035" target="_blank"> 623 53 30 35</a></p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3039.1422514807905!2d-3.633850423518235!3d40.38353975765798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvda.%20de%20la%20Albufera%20321.%20Planta%202%20Puerta%2012%20Madrid%2028031!5e0!3m2!1ses!2ses!4v1684837191779!5m2!1ses!2ses" 
            width="300px"
            height="300px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="main-container2">
        <div className="cajas2">
          <ul>
            <h1 className="main-text1">
              Servicio de asistencia psicológica.
              <br />
            </h1>
            <p className="main-text">
              Orientado a proporcionar asistencia psicológica a las víctimas de
              LGTBIfobia que contacten con nosotros, realizando una intervención
              individualizada. <br /> Entre otras, comprende las siguientes
              tareas:
            </p>
            <li>
              Preparación de la víctima para minimizar los efectos de la
              experiencia y reacciones de aparición posterior.
            </li>
            <li>
              Intervención psicológica para incrementar la organización
              cognitiva de la víctima y su entrenamiento en el manejo de la
              ansiedad.
            </li>
          </ul>
        </div>

        <div className="cajas2">
          <ul>
            <h1 className="main-text1">
              - Servicio de orientación jurídica. <br />
            </h1>
            <p className="main-text">
              Orientado a facilitar las herramientas que tienen a su disposición
              las víctimas y los procesos de denuncia, incluyendo:
            </p>
            <li>
              Asesoramiento jurídico en procedimientos penales o en cualquier
              otra materia jurídica relacionada con la situación de la víctima.
            </li>
            <li>
              Información y asesoramiento sobre tramitación, gestión y
              elaboración de denuncias u otros dictámenes e informes jurídicos.
            </li>
            <li>
              Colaboración con órganos judiciales y representantes legales de
              las víctimas para evitar los efectos de la victimización
              secundaria.
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="footer-things">
          <div className="caja1-footer">
            <p className="p-footer" >www.madrid.es/igualdad</p>
          </div>
          <div className="caja2-footer" >
            <img className="footer-img" src={IconoFooter} alt="" />
          </div>
        </div>
      </footer>

    </>

  );
};
export default MainPage;

//-------------------------------codigo anterior-------------------------------------
// const MainPage = () => {
//   return (
//     <>
//     <div className="main-container">
//       <div className="cajas">Servicio municipal de atención
//         a victimas de
//            LGTBIfobia</div>

//       <div className="cajas">
//       <ul>
//           <h1 className="main-text">

// Servicio de asistencia psicológica.<br /></h1><p className="main-text">
//           Orientado a proporcionar asistencia psicológica a las víctimas de
//           LGTBIfobia que contacten con nosotros, realizando una intervención
//           individualizada. <br /> Entre otras, comprende las siguientes tareas:</p><li>
//           Preparación de la víctima para minimizar los efectos de la
//           experiencia y reacciones de aparición posterior.</li><li>
//           Intervención psicológica para incrementar la organización cognitiva
//           de la víctima y su entrenamiento en el manejo de la ansiedad.</li>
//           </ul>
//       </div>

//       <div className="cajas">14</div>
//       <div className="cajas">15</div>
//     </div>

//     </>
//   )
// };
// export default MainPage;

//------mi codigo--------------------
// return (
//   <>
//     <section id="main-text">
//       <div className="">
//         <p className="pelabel-principal">Servicio municipal de atención</p>
//         <p className="pelabel-principal2">
//           a victimas de <br /> LGTBIfobia
//         </p>
//       </div>

//       <div className="pin">
//         <img
//           className="iconoWhatsapp"
//           src={IconoWhatsapp}
//           alt="IconoWhatsapp"
//         />
//         <p className="number">623 53 30 35</p>
//         <p className="pe-mapa">Accede al mapa</p>
//         <img className="pin-mapa" src={IconoMapa} alt="mapa" />
//         <a
//           className="a-Mapa"
//           href="https://www.google.com/maps/place/Av.+de+la+Albufera,+321,+Puerta+12,+28031+Madrid,+Espa%C3%B1a/@40.3835397,-3.6361464,17z/data=!3m1!4b1!4m9!1m2!2m1!1sAvda.+de+la+Albufera+321.+Planta+2+Puerta+12+Madrid+28031!3m5!1s0xd42251d1f6741a1:0xabe063da33263f57!8m2!3d40.3835357!4d-3.6312755!15sCjlBdmRhLiBkZSBsYSBBbGJ1ZmVyYSAzMjEuIFBsYW50YSAyIFB1ZXJ0YSAxMiBNYWRyaWQgMjgwMzGSARBjb21wb3VuZF9zZWN0aW9u4AEA"
//           target="_blank"
//         >
//           Avda. de la Albufera 321. Planta 2 Puerta 12 Madrid 28031
//         </a>
//       </div>

//       <div className="card-container">
//         <p className="pSM">Redes Sociales</p>
//         <a
//           href="https://www.facebook.com/profile.php?id=100079658599308"
//           target="_blank"
//         >
//           <img className="iconoContacto" src={IconoFacebook} alt="facebook" />
//         </a>
//         <a
//           href="https://www.instagram.com/madridcontralgtbifobia/"
//           target="_blank"
//         >
//           <img
//             className="iconoContacto"
//             src={IconoInstagram}
//             alt="instagram"
//           />
//         </a>
//         <a href="https://twitter.com/Lgtbifobiamad" target="_blank">
//           <img className="iconoContacto" src={IconoTwitter} alt="twitter" />
//         </a>
//         <a
//           href="mailto:serviciolgtbifobia@imaginabienestar.com"
//           target="_blank"
//         >
//           <img className="iconoContacto" src={IconoEmail} alt="sobre" />
//         </a>
//       </div>
//     </section>

//     <section id="tocho-card">
//       <div className="texto">
//         <ul>
//           <h1 className="main-text">
//             - Servicio de asistencia psicológica.
//             <br />
//           </h1>
//           <p className="main-text">
//             Orientado a proporcionar asistencia psicológica a las víctimas de
//             LGTBIfobia que contacten con nosotros, realizando una intervención
//             individualizada. <br /> Entre otras, comprende las siguientes
//             tareas:
//           </p>
//           <li>
//             Preparación de la víctima para minimizar los efectos de la
//             experiencia y reacciones de aparición posterior.
//           </li>
//           <li>
//             Intervención psicológica para incrementar la organización
//             cognitiva de la víctima y su entrenamiento en el manejo de la
//             ansiedad.
//           </li>
//           <li>
//             Activación de recursos internos (estrategias de afrontamiento) y
//             externos (apoyo social, laboral y familiar) para minimizar la
//             victimización secundaria.
//           </li>
//           <li>
//             Realización de actuaciones en el ámbito psicológico relacionadas
//             con órdenes de protección.
//           </li>
//           <h1 className="main-text">
//             - Servicio de orientación jurídica. <br />
//           </h1>
//           <p className="main-text">
//             Orientado a facilitar las herramientas que tienen a su disposición
//             las víctimas y los procesos de denuncia, incluyendo:
//           </p>
//           <li>
//             Asesoramiento jurídico en procedimientos penales o en cualquier
//             otra materia jurídica relacionada con la situación de la víctima.
//           </li>
//           <li>
//             Información y asesoramiento sobre tramitación, gestión y
//             elaboración de denuncias u otros dictámenes e informes jurídicos.
//           </li>
//           <li>
//             Colaboración con órganos judiciales y representantes legales de
//             las víctimas para evitar los efectos de la victimización
//             secundaria.
//           </li>
//           <li>
//             Asesoramiento y gestión de solicitud o petición de medidas de
//             protección.
//           </li>
//         </ul>
//       </div>
//     </section>
//   </>
// );
{
  /* <p className="main-text-mapa">Accede al mapa</p>
          <img className="pin-mapa" src={IconoMapa} alt="mapa" />
          <a
            className="a-Mapa"
            href="https://www.google.com/maps/place/Av.+de+la+Albufera,+321,+Puerta+12,+28031+Madrid,+Espa%C3%B1a/@40.3835397,-3.6361464,17z/data=!3m1!4b1!4m9!1m2!2m1!1sAvda.+de+la+Albufera+321.+Planta+2+Puerta+12+Madrid+28031!3m5!1s0xd42251d1f6741a1:0xabe063da33263f57!8m2!3d40.3835357!4d-3.6312755!15sCjlBdmRhLiBkZSBsYSBBbGJ1ZmVyYSAzMjEuIFBsYW50YSAyIFB1ZXJ0YSAxMiBNYWRyaWQgMjgwMzGSARBjb21wb3VuZF9zZWN0aW9u4AEA"
            target="_blank"
          >
            Avda. de la Albufera 321. Planta 2 Puerta 12 Madrid 28031
          </a> */
}
