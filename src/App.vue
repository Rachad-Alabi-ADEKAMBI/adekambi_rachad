<template>
  <nav class="header">
      <div class="header__logo" >
        <router-link to="/">
          <span>
            CODEUR
          </span> <br>

          <strong>
            CREATIF
          </strong>
        </router-link> |
      </div>

      <div class="header__list">
          <div class="header__list__item">
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
  </nav>
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
