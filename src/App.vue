<template>
  <nav class="header">
      <div class="header__logo" >
      <router-link to="/about">
        <img src="img/codeur_creatif.jpg" alt="freelance developer">
        </router-link>
      </div>

      <div class="header__list">
        <div class="header__list__item" :class="{ 'active-link': currentRoute === '/about' || currentRoute === '/' }">
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

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/education' }">
              <router-link to="/education">
                <p>Education</p>
              </router-link>
            </div>

            <div class="header__list__item" :class="{ 'active-link': currentRoute === '/projects' }">
              <router-link to="/projects">
                <p>Projects</p>
              </router-link>
            </div>
      </div>

      <div class="header__icon" id="display"
         @click="displayMenu()" >
          <span>MENU</span>
      </div>
  </nav>

    <div class="header-responsive" id="menu">
            <div class="header-responsive__item" @click='closeMenu()'>
                <router-link to="/about" >
                  <p>About</p>
                </router-link>
            </div>

            <div class="header-responsive__item"  @click='closeMenu()'>
                <router-link to="/skills" >
                  <p>Skills</p>
                </router-link>
            </div>

            <div class="header-responsive__item"  @click='closeMenu()'>
                <router-link to="/experience" >
                  <p>Experience</p>
                </router-link>
            </div>

            <div class="header-responsive__item"  @click='closeMenu()'>
                <router-link to="/education" >
                  <p>Education</p>
                </router-link>
            </div>

            <div class="header-responsive__item"  @click='closeMenu()'>
                <router-link to="/projects" >
                  <p>Projects</p>
                </router-link>
            </div>

            <br><br>
            <div class="header-responsive__item mt-5"
             @click='closeMenu()'>
                  <p>Close</p>
            </div>
    </div>
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


