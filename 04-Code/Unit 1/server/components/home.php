<?php 

$dataHome = MongoController::search_and_get('InfoWeb',
                                            'HomeData',
                                            'ID',
                                            '01');

?>

<div class="home-class" >

    <div class="reserveTitle">
        
        <?php   
        echo '<h1>' . $dataHome->title . '</h1>'; ?>
        
    </div>

    <br><br><br>
    <div class="mainPhoto">
        <div class="pic1"></div>
        <div class="pic2"></div>
        <div class="pic3"></div>
    </div>

    <section class="information">
        
        <?php 
        echo '<p class="p1">' . $dataHome->info_1 . '</p>';
        echo '<p class="p1">' . $dataHome->info_2 . '</p>';
        ?>
                
    </section>

           
</div>

