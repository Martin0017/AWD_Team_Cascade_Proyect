import React from "react";
import "./Repository.css";
import Table from "./Table";
import FormFauna from "./FormFauna";
import { getFauna } from "../services/axios";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';

const Repository = () => {

  const [formFauna, setFormFauna] = useState({
    id: ""//
  })

  const [fauna, setFauna] = useState([])

  useEffect(() => {
    async function loadFauna() {

      const response = await getFauna(formFauna.id)

      if (response.status === 200) {
        setFauna(response.data)
      } else {
        console.log("Error")
      }
    }
    loadFauna()
  }, [formFauna])

  return (
    <div className="repository-class">
      <Box>
        <br></br><br></br>
        <FormFauna formFauna={formFauna} setFormFauna={setFormFauna}
        />
        <br></br>
        <Table fauna={fauna} />
      </Box>
      <footer>
        <div className="container-footer">
          <div className="footer2">
            <div className="copyright">
              © 2022 Todos los Derechos Reservados |{" "}
              <a href="/">Team Cascade</a>
            </div>

            <div className="informationFooter">
              <a href="/">Informacion Compañia</a> |{" "}
              <a href="/">Privacion y Politica</a> |{" "}
              <a href="/">Terminos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );

};

export default Repository;
