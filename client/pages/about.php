<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/about.css" type="text/css"/>
  </head>
  <body>
     
  <div class="container">
    <div class="row" >
        <?php include "../components/navbar.html"; ?>
    </div>
    </div>

    <br><br><br><br>
    <!-- <h3>temas tecnicos y se explica mas de como funciona la pagina</h3> -->
    <div class="background">
      <div class="about-class">
      <h3 class="title">Acerca de</h3>
      <div class="flex">
        <div class="box colour">
          <h5>¿Cómo se registran las imágenes de la fauna del Chocó Andino?</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum elit, 
          condimentum vitae nulla eget, sagittis tincidunt ipsum. Ut non ornare ex. Vivamus nec auctor massa.
          Sed at interdum velit. Quisque felis tellus, laoreet id dapibus nec, faucibus vehicula purus. 
          Vivamus iaculis dictum venenatis. Suspendisse sit amet bibendum augue. Ut a pretium turpis. 
          Curabitur ullamcorper nibh eleifend nibh placerat, eget pharetra magna lacinia.
        </div>
        <div class="box colour">
          <h5>Por ejemplo: </h5>
          <img src="../images/bird.jpg" alt="Bird image" class="image">
          <img src="../images/frog.png" alt="Frog image" class="image">
        </div>
        <div class="box colour">
          <h5>¿Cómo funciona la página web?</h5>
          La web está dividida en cuatro secciones: Inicio, Repositorio, Conócenos y Acerca de.
          En el inicio podemos encontrar toda la información acerca de  la reserva del Chocó Andino. 
          Repositorio permitirá al administrador la gestión de contenidos (principalmente imágenes, audio y video) 
          relacionados con la fauna de esta área ubicada en la zona nororiente de Pichincha, mientras que por parte 
          de los visitantes tendrán acceso a la visualización del contenido cargado.
          Conócenos es la sección que contiene la información de las personas encargadas de recopilar las imágenes 
          de la fauna del sector, además de información de los programadores del sitio web.
          Acerca de es la sección que muestra de forma técnica cómo se capturan las imágenes.
        </div>
      </div>
      </div>
    <br><br>
    <div>
        <?php include "../components/footer.html"; ?>
    </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- <script src="../js/about.js"> </script> -->
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>

