<!-- Contact -->
<section id="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Contáctanos</h2>
        <h3 class="section-subheading text-muted">Sugerencias, consultas y comentarios.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <form id="contactForm" method="post" action="{{ action('HomeController@myTestMail') }}" accept-charset="UTF-8" name="sentMessage" novalidate>
          {!! csrf_field() !!}
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input class="form-control" id="name" name="name" type="text" placeholder="Tu Nombre *" required data-validation-required-message="El nombre es obligatorio.">
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group">
                <input class="form-control" id="email" name="email" type="email" placeholder="Tu correo *" required data-validation-required-message="El correo es obligatorio.">
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group">
                <input class="form-control" id="phone" name="phone" type="tel" placeholder="Tu telefono *" required data-validation-required-message="El telefono es obligatorio.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea class="form-control" id="message" name="message" placeholder="Tu mensaje *" required data-validation-required-message="Su mensaje es obligatorio."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-12 text-center">
              <div id="success"></div>
              <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Enviar Mensaje</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
