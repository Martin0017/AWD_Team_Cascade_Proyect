<?php 

require $_SERVER['DOCUMENT_ROOT'].'/proyect/server/controllers/MongoController.php';
$is_login = MongoController::is_login();

?>

<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="../pages/index.php">CHOCÓ ANDINO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel text-white">Menú</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../pages/index.php">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../pages/repository_view.php">Repositorio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../pages/know_us.php">Conocenos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../pages/about.php">Acerca de</a>
                    </li>
                    <?php
                
                if($is_login == true)
                {
                echo '<li class="nav-item">' .
                  '<a class="nav-link" href="../pages/put_elements.php">' . 'Contribuir' . '</a>' .
                '</li>';
                }
                ?>
                </ul>
                
                <br><br><br><br><br><br><br><br><br>

                <?php
                
                if($is_login == true){
                echo '<form action="" method="POST">' .   
                  '<div class="d-grid gap-2 col-6 mx-auto">' .
                  '<button name="logout" class="btn btn-primary">' . 'Cerrar Sesion' . '</button >' .
                  '</div>' .
                  '/form' ;
                }else{
                echo '<div class="d-grid gap-2 col-6 mx-auto">' .
                    '<a href="../pages/login.php" class="btn btn-primary">' . 'Iniciar Sesión' . '</a>' .
                '</div>' .
                '<li class="nav-item">' .
                    '<a class="nav-link" href="../pages/register.php">' . 'Deseo contribuir' . '</a>' .
                '</li>';
                }
                ?>
            </div>


        </div>
    </div>
</nav>

<?php

if(isset($_POST['logout'])){
  MongoController::set_login(false);
  echo '<script type="text/JavaScript">' . 'window.location.replace("/proyect/client/pages/index.php")' . '</script>';
}

?>