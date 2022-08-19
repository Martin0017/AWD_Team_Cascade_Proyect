import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import {Snackbar, Alert } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { emailValidation,
         minLengthValidation}
from '../utils/form_validation';
import { sign_up_api } from '../services/user_api'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="VACIO">
        TeamCascade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Sign_Up() {

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: ""
  });

  const [formValid, setFormValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    photo: false
  });

  const inputValidation = e => {

    const { type, name} = e.target;

    if(type === "email"){
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target)
      });
    }

    if(type == "text"){
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 1)
      });
    }

    if(type == "password"){
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 8)
      });
    }

  
  };

  const changeForm = e => {
    console.log(inputs);
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
  };

  const [full, setFull] = useState(false);
  const [wrg, setWrg] = useState();

  const register = async (e) => {

    e.preventDefault();
    const { firstName, lastName, email, password } = formValid;
    const nameVal = inputs.firstName;
    const lastVal = inputs.lastName;
    const emailVal = inputs.email;
    const passVal = inputs.password;
    const photo = inputs.photo;

    if( !nameVal || !lastVal || !emailVal ||!passVal){
      setFull(true);
      setWrg("Llene todos los campos !!!");
    }else{
      if(!email){
        setFull(true);
        setWrg("Ingrese un correo valido !!!");
      }else{
        if(!password){
          setFull(true);
          setWrg("Contraseña minimo 8 caracteres!!!");
      }else {
        
        const result = await sign_up_api(inputs);

        if(!result.ok){
          setFull(true);
          setWrg(result.message);
        }else{
          setFull(true);
          setWrg(result.message);
          window.location.href = "/sign_in";
        }
      }
    }
    }
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFull(false);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}

        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box component="form"  onChange={changeForm} onSubmit={register} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  type="text"
                  onChange={inputValidation} 
                  value={inputs.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  type="text"
                  onChange={inputValidation}
                  value={inputs.lastName}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField

                  fullWidth
                  id="email"
                  label="Correo"
                  type="email"
                  name="email"
                  onChange={inputValidation}
                  value={inputs.email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField

                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  onChange={inputValidation}
                  value={inputs.password}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField

                  fullWidth
                  name="photo"
                  label="Foto de Perfil"
                  type="text"
                  id="login_user"
                  onChange={inputValidation}
                  value={inputs.photo}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign_in" variant="body2">
                  Tiene una cuenta? Inicie Sesion
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Snackbar open={full} autoHideDuration={6000} onClose={handleClose}  >
            <Alert onClose={handleClose} variant="filled" severity="error" >
             {wrg}
             </Alert>
         </Snackbar>

        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

    </ThemeProvider>
    <br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}