<template>
  <nav class="header">
      <div class="header__logo" >
      <router-link to="/about">
        <img src="img/codeur_creatif.jpg" alt="freelance developer">
        </router-link>
      </div>

      <div class="header__list">
        <div class="header__list__item" :class="{ 'active-link': currentRoute === '/about'}">
            <router-link to="/about">
                <p>About</p>
            </router-link>
        </div>

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/skills' }">
              <router-link to="/skills">
                <p>Skills</p>
              </router-link>
            </div>

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/experience' }">
              <router-link to="/experience">
                <p>Experience</p>
              </router-link>
            </div>

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/Education' }">
              <router-link to="/education">
                <p>Education</p>
              </router-link>
            </div>

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/portfolio' }">
              <router-link to="/portfolio">
                <p>Portfolio</p>
              </router-link>
            </div>
      </div>

      <div class="header__icon" id="display"
         @click="displayMenu()" >
          <span>MENU</span>
      </div>

      <div class="header__responsive" id="menu">
            <div class="header__responsive__item" @click='closeMenu()'>
                <router-link to="/about" >
                  <p>About</p>
                </router-link>
            </div>

            <div class="header__responsive__item"  @click='closeMenu()'>
                <router-link to="/skills" >
                  <p>Skills</p>
                </router-link>
            </div>

            <div class="header__responsive__item"  @click='closeMenu()'>
                <router-link to="/experience" >
                  <p>Experience</p>
                </router-link>
            </div>

            <div class="header__responsive__item"  @click='closeMenu()'>
                <router-link to="/education" >
                  <p>Education</p>
                </router-link>
            </div>

            <div class="header__responsive__item"  @click='closeMenu()'>
                <router-link to="/portfolio" >
                  <p>Portfolio</p>
                </router-link>
            </div>
      </div>
  </nav>
  <router-view/>

</template>

<script>
export default {
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
  mounted(){
   // this.closeMenu();
  },
  methods: {
    displayMenu(){
      //alert('hi');
      let menu = document.getElementById('menu');

      menu.style.display = 'block';
    },
    closeMenu(){
      let menu = document.getElementById('menu');
      menu.style.display = 'none';
    },
  }
};
</script>

<style>
  img{
    width: 150px;
    height: auto;
    margin: auto auto 50px auto;
  }
</style>


