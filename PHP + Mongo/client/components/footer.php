

    <footer class="bg-dark text-center text-white position-relative fixed-bottom">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Form -->
      <section class="">
        <form action="" method="POST">
          <!--Grid row-->
          <div class="row d-flex justify-content-center">
            <!--Grid column-->
            <div class="col-auto">
              <p class="pt-2">
                <strong>Desea recibir noticias?</strong>
              </p>
            </div>
            <!--Grid column-->
  
            <!--Grid column-->
            <div class="col-md-5 col-12">
              <!-- Email input -->
              <div class="form-outline form-white mb-4">
                <input type="email" name="email-for-news" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">Email</label>
              </div>
            </div>
            <!--Grid column-->
  
            <!--Grid column-->
            <div class="col-auto">
              <!-- Submit button -->
              <button type="submit" class="btn btn-outline-light mb-4" name='button-name'>
                Subscribirse
              </button>

            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </form>

        <?php 
        
        if(isset($_POST['button-name'])) {
          $email_for_news = $_POST['email-for-news'];
          $object_email =new stdClass();
          $object_email -> email = $email_for_news;
          MongoController::set_data('Suscribers','UserEmail',$object_email);
          }
        
        ?>
      </section>
      <!-- Section: Form -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Webmasters:
      <a class="text-white" href="https://github.com/Martin0017/AWD_Team_Cascade_Proyect.git">Team Cascade</a>
    </div>
    <!-- Copyright -->
  </footer>
    

  <!-- End of .container -->