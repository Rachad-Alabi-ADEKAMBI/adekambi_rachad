<template>
         <div class="message">
           <div class="message__text">
             <p>
              Contact me for freelance work
             </p>
           </div>
            <div class="message__btn">
             <a href="mailto:adekambirachad@gmail.com">
              <i class="fas fa-download"></i>
             </a>
           </div>
         </div>
 </template>

 <script>
 export default {
   name: 'Message',
   props: {
     msg: String
   }
 }
 </script>