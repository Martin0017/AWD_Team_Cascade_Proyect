<?php 

require $_SERVER['DOCUMENT_ROOT'].'../client/controllers/MongoController.php';
$data_repository = MongoController::get_all('Repository','Fauna','type','animal');

foreach($data_repository as $data){
echo '<div class="component-card" >' . '<div class="card border-success mb-3 " style="max-width: 540px;">' .
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
?>