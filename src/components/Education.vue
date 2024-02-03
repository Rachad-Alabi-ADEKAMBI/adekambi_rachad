<template>
  <div class="infos">

       <div class="message">
         <div class="message__text">
           <p>
             Available for freelance work
           </p>
         </div>
         <div class="message__btn">
              <a href='mailto:adekambirachad@gmail.com'>
                <i class="fas fa-download"></i>
              </a>
          </div>
       </div>

       <h1 class="title">
          My education
        </h1>

       <div class="education">


          <div class="education__date">
              2020
          </div>

          <div class="education__details">
              <img src="img/open_classrooms.jpg" alt="openclassrooms student">
              <p>
                <span>Open classrooms</span> <br>
                <strong>B.Sc. in Computer System and Software </strong>
              </p>
          </div>
       </div>

       <div class="education">
        <div class="education__date">
            2012
        </div>

        <div class="education__details">
            <img src="img/eneam.png" alt="openclassrooms student">
            <p>
              <span>ENEAM</span> <br>
              <strong>Higher National Diploma in accounting</strong>
            </p>
        </div>
      </div>

       <div class="education">
        <div class="education__date">
            2010
        </div>

        <div class="education__details">
            <img src="img/edu.png" alt="bachelor degree">
            <p>
              <span>CS LA GRACE</span> <br>
              <strong>Bachelor's degree</strong>
            </p>
        </div>
      </div>

      <h2 class="title">
        My certifications
      </h2>

      <p>
        <span class="red">*</span>
        Copy and paste my name into the openclassroom request field to display the certificate.
          Click here to Copy <a href="">Rachad</a>
      </p>

      <div class="certification">
          <div class="certification__date">
            2019
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classroom</span> <br>
              <strong>PHP</strong> <br>
              <a href="">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2019
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classroom</span> <br>
              <strong>Javascript</strong> <br>
              <a href="">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2019
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classroom</span> <br>
              <strong>Git</strong> <br>
              <a href="">View certificate</a>
            </p>
          </div>

      </div>
  </div>
</template>

<script>
export default {
 name: 'Education',
 props: {
   msg: String
 }
}
</script>