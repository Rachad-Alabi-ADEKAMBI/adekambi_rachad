<template>
  <div class="infos">

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

       <h1>
          My portfolio
        </h1>

       <div class="portfolio">
          <div class="portfolio__menu">
              <a href="">All</a>
              <a href="">Websites</a>
              <a href="">Api projects and wordpress plugins</a>
          </div>

          <div class="portfolio__items">
            <div class="item">
              <img src="" alt="">
            </div>
          </div>
       </div>

  </div>
</template>

<script>
export default {
 name: 'Portfolio',
 props: {
   msg: String
 }
}
</script>