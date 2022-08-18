import React from "react";
import "../styles/Repository.css";
import TableFront from "../components/TableFront";
import { useState } from "react";
import { Box } from '@mui/material';

const Repository = () => {

  const [fauna] = useState([])

  return (
    <div className="repository-class">
      <Box id="tableBox">
        <TableFront />
      </Box>
    </div>

  );

};

export default Repository;
