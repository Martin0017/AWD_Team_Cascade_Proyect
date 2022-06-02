<?php 

$dataPresentation = MongoController::search_and_get('InfoWeb',
                                            'AboutData',
                                            'ID',
                                            '01');
?>

<div class="flex">
      <div class="box colour">
        <?php 
        
        echo '<h5>' . $dataPresentation->title_1 . '</h5>' ;
        echo $dataPresentation->how_register;
      
        ?>
        </div>
      
      <div class="box colour">
        <h5>Por ejemplo: </h5>
        <img src="../images/bird.jpg" alt="Bird image" class="image">
        <img src="../images/frog.png" alt="Frog image" class="image">
      </div>
      <div class="box colour">
       
      <?php 
        echo '<h5>' . $dataPresentation->title_2 . '</h5>';
        echo $dataPresentation->how_do_web;
        ?>
      </div>
    </div>