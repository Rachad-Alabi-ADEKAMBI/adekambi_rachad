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
        <span>
          Full-stack Developer
        </span>

        <h1>
          Rachad Alabi ADEKAMBI
        </h1>

        <strong>
          Description
        </strong>

        <p>
          i am m Rachad, your friendly full-stack developer with 4 years of experience.
           I smoothly navigate the website landscape using tools like Laravel, Vue.js, Flask, and WordPress.
            While I'm proficient in both backend and frontend work, I lean towards backend development as my
            specialty. Crafting innovative web solutions and tackling complex challenges is where I excel.
             My freelancing journey has given me the opportunity to assist numerous clients, leaving a trail
              of satisfied customers.
        </p>
   </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      currentRoute: '',
    };
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;
    },

  },
};
</script>