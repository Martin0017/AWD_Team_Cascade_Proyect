<div class="d-flex flex-column" id="template-bg-3">
    <form class="d-flex" action="" method="POST">
        <input class="form-control me-2" name="scientific" type="search" placeholder="Nombre cientifico"
            aria-label="Search">
        <button class="btn btn-outline-success" name="btn-s-c" type="submit">Buscar por nombre cientifico</button>
        <input class="form-control me-2" name="vulgar" type="search" placeholder="Nombre comun" aria-label="Search">
        <button class="btn btn-outline-success" name="btn-s-v" type="submit">Buscar por nombre común</button>
        <button class="btn btn-outline-success" name="btn-all" type="submit">Buscar todos</button>
    </form>

</div>


<?php 

if(isset($_POST['btn-s-c'])){

  $scientific_name = $_POST['scientific'];
  $data_repository = MongoController::get_all('Repository','Fauna','scientific_name',$scientific_name);
  run_data($data_repository);

}elseif(isset($_POST['btn-s-v'])){

  $vulgar_name = $_POST['vulgar'];
  $data_repository = MongoController::get_all('Repository','Fauna','vulgar_name',$vulgar_name);
  run_data($data_repository);

}elseif(isset($_POST['btn-all'])) {
$data_repository = MongoController::get_all('Repository','Fauna','type','animal');
run_data($data_repository);

}else{
  $data_repository = MongoController::get_all('Repository','Fauna','type','animal');
  run_data($data_repository);
  
  }

  function run_data($data_repository){
    foreach($data_repository as $data){
      echo '<div class="component-card align-items-center" >' . '<div class="card border-success mb-3 " style="max-width: 540px;">' .
        '<div class="row g-0">' .
          '<div class="col-md-4  image-hover">' .
            '<img src=' . $data->url_image . 'class="img-fluid" width="190" height="250" alt="...">' .
          '</div>' .
          '<div class="col-md-8">' .
            '<div class="card-body">' .
              '<h5 class="card-title">' . $data->vulgar_name .'</h5>' .
              '<p class="card-text">' . $data->description . '</p>' .
              '<p class="card-text">' . '<small class="text-muted">' . 'Tomado el ' . $data->date . '</small>' . '</p>'
            . '</div>'
          . '</div>'
        . '</div>'
      . '</div>'
      .'</div>';
      }
  }
?>