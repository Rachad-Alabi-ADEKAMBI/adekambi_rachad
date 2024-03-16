<template>
  <div class="infos">

       <div class="message">
         <div class="message__text">
           <p>
             Available for freelance work
           </p>
         </div>
         <div class="message__btn">
              <a href='mailto:adekambirachad@gmail.com'>
                <i class="fas fa-download"></i>
              </a>
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
                    ComeUp
                </strong>

                <ul>
  <li>Completed over 70 gigs with a 100% customer satisfaction rate</li>
  <li>Developed customized website designs using frameworks such as Laravel, Vue.js, and Flask</li>
  <li>Developed custom WordPress extensions and themes</li>
  <li>Transformed Figma and Photoshop mockups into responsive and functional websites</li>
  <li>Created custom APIs to deliver secure and fast data</li>
  <li>Debugged PHP and JavaScript code</li>
</ul>

            </div>
       </div>


       <div class="experience">
            <div class="experience__date">
                01/2020 - 09/2021
            </div>

            <div class="experience__details">
                <span>
                    Junior developer
                </span> <br>

                <strong>
                    Oba Code
                </strong>

                <ul>
                  <li>
                    Used Git for version control to decrease code conflicts
                  </li>

                  <li>
                    Customized website content with WordPress, improving
                    content management efficiency.
                  </li>
                  <li>Collaborated with designers and performance team on
                      designing updates to sites and blogs, improving user
                      experience.
                  </li>

                  <li>
                    Briefed development team on website research, and
                    made suggestions for website builds/products.
                  </li>

                  <li>
                    Participated in stand-ups 2 times a month, where team
                      leaders would review, assign, and coach team members.
                  </li>
                </ul>
            </div>
       </div>

       <div class="experience">
    <div class="experience__date">
        12/2014 - 06/2018
    </div>

    <div class="experience__details">
        <span>
            Accountant
        </span> <br>

        <strong>
            AHVIC
        </strong>

        <ul>
            <li>Managed financial records and prepared financial statements.</li>
            <li>Performed budget analysis and cost control measures.</li>
            <li>Collaborated with auditors during financial audits.</li>
            <li>Provided financial insights and recommendations to management.</li>
            <li>Ensured compliance with accounting regulations and standards.</li>
        </ul>
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

<style>
  li{
    list-style: circle
  }
</style>