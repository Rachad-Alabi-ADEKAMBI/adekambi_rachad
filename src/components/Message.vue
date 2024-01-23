<template>
         <div class="message">
           <div class="message__text">
             <p>
               Available for freelance work
             </p>
           </div>
            <div class="message__btn">
             <a href="">
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