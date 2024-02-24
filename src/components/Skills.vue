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

        <h3>
          Langages
        </h3>

        <div class="skill">
          <img src="img/logos/langages/html.png" alt="">
          <img src="img/logos/langages/css.png" alt="">
          <img src="img/logos/langages/js_logo.png" alt="">
          <img src="img/logos/langages/logo-php.jpeg" alt="">
          <img src="img/logos/langages/mysql.png" alt="">
          <img src="img/logos/langages/python.png" alt="">
        </div>

        <h3>
          Frameworks & Libraries
        </h3>

        <div class="skill">
          <img src="img/logos/frameworks/laravel.png" alt="">
          <img src="img/logos/frameworks/vue.png" alt="">
          <img src="img/logos/frameworks/flask.png" alt="">
          <img src="img/logos/frameworks/bootstrap.png" alt="">
          <img src="img/logos/frameworks/tailwindcss.png" alt="" style="width: 120px;">

        </div>

      <h3>
        Tools
      </h3>

      <div class="skill">

        <img src="img/logos/tools/wordpress.png" alt="">

        <img src="img/logos/tools/scss.png" alt="">
        <img src="img/logos/tools/aws.png" alt="">
        <img src="img/logos/tools/git.png" alt="">
        <img src="img/logos/tools/docker.png" alt="">
        <img src="img/logos/tools/png.png" alt="" >
        <img src="img/logos/tools/figmaa.png" alt="">

      </div>  <br>

      <h3>
        Operating systems
      </h3>

      <div class="skill">
        <img src="img/logos/os/linux.png" alt="">
        <img src="img/logos/os/windowws.png" alt="">
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




