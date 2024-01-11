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
          My education
        </h1>

       <div class="education">


          <div class="education__date">
              2020
          </div>

          <div class="education__details">
              <img src="img/open_classrooms.jpg" alt="openclassrooms student">
              <p>
                <span>Open classrooms</span> <br>
                <strong>B.Sc. in Computer System and Software </strong>
              </p>
          </div>
       </div>

       <div class="education">


<div class="education__date">
    2020
</div>

<div class="education__details">
    <img src="img/open_classrooms.jpg" alt="openclassrooms student">
    <p>
      <span>Open classrooms</span> <br>
      <strong>B.Sc. in Computer System and Software </strong>
    </p>
</div>
</div>
  </div>
</template>

<script>
export default {
 name: 'Education',
 props: {
   msg: String
 }
}
</script>