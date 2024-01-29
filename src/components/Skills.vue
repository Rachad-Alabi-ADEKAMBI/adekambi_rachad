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
              <span>
                Languages
              </span>
            <div class="skill">
                <img src="/public/img/logos/frameworks/laravel.png" alt="">
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