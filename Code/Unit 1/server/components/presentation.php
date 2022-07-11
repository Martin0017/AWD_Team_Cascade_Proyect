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
        <img src="https://i.ibb.co/DVF04mw/frog.png" alt="Bird image" class="image">
        <img src="https://i.ibb.co/zQjxQ82/bird.jpg" alt="Frog image" class="image">
      </div>
      <div class="box colour">
       
      <?php 
        echo '<h5>' . $dataPresentation->title_2 . '</h5>';
        echo $dataPresentation->how_do_web;
        ?>
      </div>
    </div>