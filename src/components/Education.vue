<template>
  <div class="infos">

       <div class="message">
         <div class="message__text">
           <p>
            Contact me for freelance work
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
                   <strong>Full-stack developer course </strong>

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
      </div> <br>

      <h1 class="">
        My certifications
      </h1>

      <div class="certification">
          <div class="certification__date">
            2020
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classrooms</span> <br>
              <strong>Linux</strong> <br>
              <a href="img/certifications/linux.pdf">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2020
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classrooms</span> <br>
              <strong>Javascript</strong> <br>
              <a href="img/certifications/javascript.pdf">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2020
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>OpenClassrooms</span> <br>
              <strong>API</strong> <br>
              <a href="img/certifications/api.pdf">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2020
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open Classrooms</span> <br>
              <strong>SEO</strong> <br>
              <a href="img/certifications/seo.pdf">View certificate</a>
            </p>
          </div>

      </div>

      <div class="certification">
          <div class="certification__date">
            2020
          </div>

          <div class="certification__details">
            <img src="img/open_classrooms.jpg" alt="open classrooms certificate">
            <p>
              <span>Open classroom</span> <br>
              <strong>Algorithmic</strong> <br>
              <a href="img/certifications/algorithmes.pdf">View certificate</a>
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