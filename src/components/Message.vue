<template>
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
 </template>

 <script>
 export default {
   name: 'Message',
   props: {
     msg: String
   }
 }
 </script>