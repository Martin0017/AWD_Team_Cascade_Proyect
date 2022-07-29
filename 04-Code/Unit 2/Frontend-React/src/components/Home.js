import React from "react";
/*import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";*/
import "./Home.css";

const Home = () => {
  return (
    <>
      <>
        <>
          <div className="home-class">
            <div class="reserveTitle">
              <h1 className="h1Main">RESERVA DEL CHOCÓ ANDINO</h1>
            </div>

            <div class="mainPhoto">
              <div class="pic1"></div>
              <div class="pic2"></div>
              <div class="pic3"></div>
            </div>

            <section class="information">
              <p className="p1">
                A tan solo 45 minutos, hacia el noroccidente de la ciudad de
                Quito, se encuentra un paraíso natural poco conocido pero
                incomparable: el Chocó Andino de Pichincha que, en julio de
                2018, fue declarado como la séptima Reserva de Biósfera, por la
                Organización de las Naciones Unidas para la Educación, la
                Ciencia y la Cultura, Unesco. Esta zona busca demostrar al mundo
                que es posible tener una relación de armonía entre desarrollo y
                conservación.
              </p>
              <p className="p1">
                El Chocó tiene una extensión total de 286 805 hectáreas y se
                extiende en tres cantones: Quito, Pedro Vicente Maldonado y San
                Miguel de los Bancos. Acoge a más de 140 especies de anfibios y
                más de 270 especies de mamíferos, incluyendo el oso de anteojos,
                el puma, el olinguito y otras. Además de sorprenderte por sus 3
                200 especies de plantas, es decir, el 15% de todas las especies
                de plantas del Ecuador.
              </p>
            </section>
            <footer>
              <div className="container-footer">
                <div className="footer2">
                  <div className="copyright">
                    © 2022 Todos los Derechos Reservados |{" "}
                    <a href="/">Team Cascade</a>
                  </div>

                  <div className="informationFooter">
                    <a href="/">Informacion</a> |{" "}
                    <a href="/">Privacion y Politica</a> |{" "}
                    <a href="/">Terminos y Condiciones</a>
                  </div>
                </div>
              </div>
            </footer>

          </div>
        </>
      </>
    </>
  );
};

export default Home;
