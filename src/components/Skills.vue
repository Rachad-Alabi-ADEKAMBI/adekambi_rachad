<template>
  <div class="infos about">
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

    <div class="skills">
      <h1>
        My skills
      </h1>

     <!-- <p>
        I have 4 years of experience as a full stack developer,
        during these 4 years I was able to acquire thanks to my ability
         to quickly learn more tips to perfect my work and discover a lot of new technologies.
      </p>
      -->

      <div class="skills__list">

        <h3>
          Languages
        </h3>

        <div class="skill">
          <img src="img/logos/langages/html.png" alt="freelance full-stack developer">
          <img src="img/logos/langages/css.png" alt="freelance full-stack developer">
          <img src="img/logos/langages/js_logo.png" alt="freelance full-stack developer">
          <img src="img/logos/langages/logo-php.jpeg" alt="freelance full-stack developer">
          <img src="img/logos/langages/mysql.png" alt="freelance full-stack developer">
          <img src="img/logos/langages/python.png" alt="freelance full-stack developer">
        </div>

        <h3>
          Frameworks and Libraries
        </h3>

        <div class="skill">
          <img src="img/logos/frameworks/laravel.png" alt="freelance full-stack developer">
          <img src="img/logos/frameworks/vue.png" alt="freelance full-stack developer">
          <img src="img/logos/frameworks/flask.png" alt="freelance full-stack developer">
          <img src="img/logos/frameworks/bootstrap.png" alt="freelance full-stack developer">
          <img src="img/logos/frameworks/tailwindcss.png" alt="freelance full-stack developer" style="width: 120px;">

        </div>


      <h3>
        Tools
      </h3>

      <div class="skill">

        <img src="img/logos/tools/wordpress.png" alt="freelance full-stack developer">

        <img src="img/logos/tools/scss.png" alt="freelance full-stack developer">
        <img src="img/logos/tools/aws.png" alt="freelance full-stack developer">
        <img src="img/logos/tools/git.png" alt="freelance full-stack developer">
        <img src="img/logos/tools/docker.png" alt="freelance full-stack developer">
        <img src="img/logos/tools/png.png" alt="freelance full-stack developer" >
        <img src="img/logos/tools/figmaa.png" alt="freelance full-stack developer">

      </div>

      <h3>
        Operating systems
      </h3>

      <div class="skill">
        <img src="img/logos/os/linux.png" alt="freelance full-stack developer">
        <img src="img/logos/os/windowws.png" alt="freelance full-stack developer">
      </div>

      <h3>
        Spoken languages
      </h3>

      <div class="skill">
        <img src="img/logos/countries/fr.jpg" alt="freelance full-stack developer">
        <img src="img/logos/countries/en.png" alt="freelance full-stack developer">
        <img src="img/logos/countries/sp.png" alt="freelance full-stack developer">
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





