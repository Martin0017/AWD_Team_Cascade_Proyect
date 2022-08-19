import React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { sign_in_api } from '../services/user_api';
import { ACCESS_TOKEN, REFRESH_TOKEN} from '../utils/constanst';
import {Snackbar, Alert } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/" style={{ textDecoration: 'none' , color: 'gray' }}>
        TeamCascade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Sign_In() {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const changeForm = e =>{
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const login = async e => {
    e.preventDefault();
    const result = await sign_in_api(inputs);
    console.log(result);
    if(result.message){
      setFull(true);
      setWrg(result.message);
    }else{
      const { accessToken, refreshToken, login_user} = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      localStorage.setItem("photo", login_user);
      window.location.href = "/repository";
    }
  }

  const [full, setFull] = useState(false);
  const [wrg, setWrg] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFull(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '130vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.andeanforests.org/wp-content/uploads/2019/07/7NV5271ms-uai-1135x1135.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <Box component="form" noValidate onSubmit={login} onChange={changeForm} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2" style={{ textDecoration: 'none', color: 'gray' }}>
                    Olvido su contraseña?
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link to='/sign_up' variant="body2" style={{ textDecoration: 'none' , color: 'gray' }}>
                    {"No tiene una cuenta? Registrese"}
                 </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={full} autoHideDuration={6000} onClose={handleClose}  >
            <Alert onClose={handleClose} variant="filled" severity="error" >
             {wrg}
             </Alert>
         </Snackbar>

    </ThemeProvider>
  );
}