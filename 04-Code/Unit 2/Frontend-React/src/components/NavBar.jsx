import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/constanst';

import { color } from '@mui/system';

export default function NavBar() {

    const navbar_options = () => {
        console.log(":v");
    }

    const page = ['Products', 'Pricing', 'Blog'];
    const pages = [{ page: 'Inicio', icon: <HomeIcon fontSize='large' color='secondary' />, to: '/' },
    { page: 'Repositorio', icon: <PetsIcon fontSize='large' color='secondary' />, to: '/repository' },
    { page: 'Conocenos', icon: <TravelExploreIcon fontSize='large' color='secondary' />, to: '/know_us' },
    { page: 'Acerca de', icon: <InfoIcon fontSize='large' color='secondary' />, to: '/about' }];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const isLogin = () => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            return (
                <Link to={'/sign_in'} style={{ textDecoration: 'none' }}>
                    <Button color="inherit">
                        <Avatar
                            alt="User"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Button>
                </Link>
            )
        } else {
            return (
                <Link to={'/sign_in'} style={{ textDecoration: 'none' }}>
                    <Button color="inherit">
                        <Typography textAlign="center" fontSize={20} color='white'>
                            Iniciar Sesion
                        </Typography>
                    </Button>
                </Link>
            )
        }
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static" color='secondary' >
                <Toolbar>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Abrir opciones">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
                                <MenuIcon fontSize='large' color='disabled' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '55px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {pages.map((pages) => (
                                <MenuItem key={pages.page} onClick={handleCloseUserMenu} sx={{ width: 350 }} >
                                    <Link to={pages.to} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginLeft: '50px' }} >
                                        {pages.icon}
                                        <Typography textAlign="center" fontSize={30} color='blueviolet'>{pages.page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        CHOCÓ ANDINO
                    </Typography>

                    {isLogin()}


                </Toolbar>
            </AppBar>
        </Box>
    );
}