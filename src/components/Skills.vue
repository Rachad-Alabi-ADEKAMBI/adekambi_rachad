<template>
  <div class="infos about">

       <div class="message">
         <div class="message__text">
           <p>
             Available for freelance work
           </p>
         </div>
          <div class="message__btn">
           <i class="fas fa-download"></i>
         </div>
       </div>

       <div class="skills">
            <span>
            What I am good at

          </span>

          <h1>
            My skills
          </h1>

          <p>
            I have 4 years of experience as a full stack developer,
            during these 2 years I was able to acquire thanks to my ability to quickly learn more tips to perfect my work and discover a lot of new technologies.
          </p>

          <div class="skills__list">

            <div class="skill">
              <img src="img/logos/langages/php.png" alt="">
              <img src="img/logos/langages/mysql.png" alt="">
              <img src="img/logos/langages/python.png" alt="">

              <img src="img/logos/langages/js_logo.png" alt="">

                <img src="img/logos/frameworks/laravel.png" alt="">
                 <img src="img/logos/frameworks/vue.png" alt="">
                 <img src="img/logos/frameworks/flask.png" alt="">
                 <img src="img/logos/frameworks/bootstrap.png" alt="">

                 <img src="img/logos/tools/git.png" alt="">
                 <img src="img/logos/os/linux.png" alt="">

             </div>
          </div>
       </div>


  </div>
</template>

<script>
export default {
 name: 'Skills',
 props: {
   msg: String
 }
}
</script>