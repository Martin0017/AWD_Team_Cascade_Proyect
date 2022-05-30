<?php 

require $_SERVER['DOCUMENT_ROOT'].'../client/controllers/MongoController.php';
?>


<br><br><br><br><br><br>

<form class="form-put" action="" method="POST">

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre común: </label>
    <div class="col-sm-10">
      <input type="text" name="vulgar" class="form-control" id="inputEmail3" placeholder="Nombre común">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre cientifico: </label>
    <div class="col-sm-10">
      <input type="text" name="scientific" class="form-control" id="inputEmail3" placeholder="Nombre cientifico">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Descripción: </label>
    <div class="col-sm-10">
      <textarea type="text" name="description" class="form-control" rows="3" id="inputEmail3" placeholder="Descripción"> </textarea>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Fecha de captura: </label>
    <div class="col-sm-10">
      <input type="text" name="date" class="form-control" id="inputEmail3" placeholder="Fecha de captura">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Tipo: </label>
    <div class="col-sm-10">
      <input type="text" name="type" class="form-control" id="inputEmail3" placeholder="Tipo">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Link de la imagen</label>
    <div class="col-sm-10">
      <input type="link" name="link" class="form-control" id="inputPassword3" placeholder="Link de la imagen">
    </div>
  </div>
 
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" name="button-save" class="btn btn-primary">Guardar</button>
    </div>

    <div class="col-sm-10">
      <button type="submit" name="button-delete" class="btn btn-primary">Borrar</button>
    </div>
  </div>
</form>
<br><br><br><br>


<?php 
        
        if(isset($_POST['button-save'])) {

          $vulgar = $_POST['vulgar'];
          $scientific = $_POST['scientific'];
          $description = $_POST['description'];
          $link = $_POST['link'];
          $date = $_POST['date'];
          $type = $_POST['type'];

          MongoController::set_data_repository($vulgar,$scientific,$description,$link,$date,$type);
          }
        
          if(isset($_POST['button-delete'])) {

            $link = $_POST['link'];
  
            MongoController::delete_data_repository($link);
            }


        ?>