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
          <div class="header__list__item" >
              <router-link to="/about" >
                <p>About</p>
              </router-link>
          </div>

          <div class="header__list__item">
              <router-link to="/skills" >
                <p>Skills</p>
              </router-link>
          </div>

          <div class="header__list__item">
              <router-link to="/experience" >
                <p>Experience</p>
              </router-link>
          </div>

          <div class="header__list__item">
              <router-link to="/education" >
                <p>Education</p>
              </router-link>
          </div>

          <div class="header__list__item">
              <router-link to="/portfolio" >
                <p>
                  Portfolio
                </p>
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

<style>

#app {

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

p{
  text-decoration: none;
}
</style>
