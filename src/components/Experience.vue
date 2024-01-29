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
         My experience
       </h1>

       <div class="experience">
            <div class="experience__date">
                01/2022 - nowaday
            </div>

            <div class="experience__details">
                <span>
                    Freelance full-stack developer
                </span> <br>

                <strong>
                    ComeUp, Upwork
                </strong>

                <p>
                  I provide web solutions and meet the needs of customers via technologies like wordpress, prestashop, nodejs. I also provided other applications like:
                  a real time dashboard for statistics analysis and back office management of the android application teepzy (VueJs, wordpress);
                  Development of the plugin that allows to automate hosting services and domain name setup (IaaS) (wordpress, shell);
                  Realization of wordpress website;
                  Customization of theme at the request of the customer;
                  Creation and Integration of wordpress theme;
                  Customization of wordpress dashboard at the request of the customer;
                </p>
            </div>
       </div> 


       <div class="experience">
            <div class="experience__date">
                01/2020 - 01/2022
            </div>

            <div class="experience__details">
                <span>
                    Junior developer
                </span> <br>

                <strong>
                    Oroubouros
                </strong>

                <p>
                  I provide web solutions and meet the needs of customers via technologies like wordpress, prestashop, nodejs
                </p>
            </div>
       </div>

  </div>
</template>

<script>
export default {
 name: 'Experience',
 props: {
   msg: String
 }
}
</script>