<template>
  <nav class="header">
      <div class="header__logo" >
       <p> <router-link to="/about">
          <span>
            CODEUR
          </span> <br>

          <strong>
            CREATIF
          </strong>
        </router-link>
      </p>
      </div>

      <div class="header__list">
        <div class="header__list__item" :class="{ 'active-link': currentRoute === '/about' }">
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
         onclick="displayMenu()" >
          <span>MENU</span>
      </div>

      <div class="header__responsive" id="menu">
            <div class="header__responsive__item">
                <router-link to="/about" >
                  <p>About</p>
                </router-link>
            </div>

            <div class="header__responsive__item">
                <router-link to="/skills" >
                  <p>Skills</p>
                </router-link>
            </div>

            <div class="header__responsive__item">
                <router-link to="/experience" >
                  <p>Experience</p>
                </router-link>
            </div>

            <div class="header__responsive__item">
                <router-link to="/education" >
                  <p>Education</p>
                </router-link>
            </div>

            <div class="header__responsive__item">
                <router-link to="/portfolio" >
                  <p>Porfolio</p>
                </router-link>
            </div>

            <div class="header__responsive__item down" id="closeMenu"
                  onclick="closeMenu()">
                  <p>Menu</p>
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
};
</script>


