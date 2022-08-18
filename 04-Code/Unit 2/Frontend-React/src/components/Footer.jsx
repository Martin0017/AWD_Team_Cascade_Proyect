import React from "react";
import "../styles/footer.css";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <footer>
        <div className="container-footer">
          <div className="footer2">
            <div className="copyright">
              © 2022 Todos los Derechos Reservados |{" "}
              <a href="/">Team Cascade</a>
            </div>

            <div className="informationFooter">
              <a href="/"><HomeIcon fontSize='large'/></a> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <a href="/"><InfoIcon fontSize='large'/></a> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <a href="/"><PetsIcon fontSize='large'/></a> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <a href="/"><GitHubIcon fontSize='large'/></a>
            </div>
          </div>
        </div>
      </footer>

    )
}