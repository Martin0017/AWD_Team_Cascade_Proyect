import React from "react";
import "./Repository.css";
import Table from "./TableFront";
import { useState } from "react";
import { Box } from '@mui/material';

const Repository = () => {

  const [fauna] = useState([])

  return (
    <div className="repository-class">
      <Box id="tableBox">
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
