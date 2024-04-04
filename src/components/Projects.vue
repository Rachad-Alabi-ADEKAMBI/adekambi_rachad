<template>
  <div class="infos">
    <div class="message">
      <div class="message__text">
        <p> Contact me for freelance work</p>
      </div>
      <div class="message__btn">
              <a href='mailto:adekambirachad@gmail.com'>
                <i class="fas fa-download"></i>
              </a>
          </div>
    </div>

    <h1 v-if="showTitle">My projects</h1>

    <p v-if="showBack" @click="displayAll()" class="link">Back to projects</p>

    <div class="portfolio">
      <!--
      <div class="portfolio__menu">
        <span @click="displayAll()" :id="elementId" v-bind:style="getStyles('all')">All</span>
        <span @click="displayWebsites()" :id="elementId" v-bind:style="getStyles('websites')">Websites & Web apps</span>
        <span @click="displayPlugins()" :id="elementId" v-bind:style="getStyles('plugins')">API & plugins</span>
      </div>
      -->

      <div class="portfolio__items" v-if="showAll">
        <div class="item" v-for="detail in all" :key="detail.id">
          <img :src="getImgUrl(detail.pic1)" alt=""
          @click="displayApp(detail.id)">
        </div>
      </div>

      <div class="portfolio__items" v-if="showWebsites">
        <div class="item" v-for="detail in websites" :key="detail.id" @click="displayApp(detail.id)">
          <img :src="getImgUrl(detail.pic1)" alt="">
        </div>
      </div>

      <div class="portfolio__items" v-if="showPlugins">
        <div class="item" v-for="detail in plugins" :key="detail.id" @click="displayApp(id)">
          <img :src="getImgUrl(detail.pic1)" alt="">
        </div>
      </div>

      <div class="portfolio__items" v-if="showApp">
          <div class="project" v-if="selectedItemId >= 0 && selectedItemId < all.length">
            <h3>
                {{ all[selectedItemId].name }}
            </h3>

            <img :src="getImgUrl(all[selectedItemId].pic1)" alt=""
              v-if="showImage1">
              <img :src="getImgUrl(all[selectedItemId].pic2)" alt=""
              v-if="showImage2">
              <img :src="getImgUrl(all[selectedItemId].pic3)" alt=""
              v-if="showImage3">

            <div class="project__btns">
              <span @click=displayImage1() >* </span>
              <span @click=displayImage2() >* </span>
              <span @click=displayImage3() >* </span>
            </div>

            <h4>
              Description
            </h4> <br>

            <p>
  {{ all[selectedItemId].description }}
  <br>
  <span v-if="all[selectedItemId].link !== ''"><a :href="all[selectedItemId].link">View project</a></span>
</p>


          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    msg: String
  },
  data() {
    return {
      showAll: true,
      showWebsites: false,
      showPlugins: false,
      showApp: false,
      selectedItemId: 0,
      showImage1: true,
      showImage2: false,
      showImage3: false,
      showTitle: false,
      showBack: false,
      all: [
      { id: 0, name: 'La cave des clubs', pic1: 'cave/cav1.jpg', pic2: 'cave/cav2.jpg', pic3: 'cave/cav3.jpg', description: "La Cave des Clubs is a website showcasing beverages from a distribution company.", link: "https://lacavedesclubs.com" },
      { id: 1, name: 'Nbroker.be', pic1: 'nbroker/nb1.jpg', pic2: 'nbroker/nb2.jpg', pic3: 'nbroker/nb3.jpg', description: "Nbroker is a website that helps you compare some loans givers details in order to choose the best one that fits your unique needs.", link: "https://nbroker.be" },
    { id: 2, name: 'Pregnancy Calendar', pic1: 'calendrier/cal1.jpg', pic2: 'calendrier/cal2.jpg', pic3: 'calendrier/cal3.jpg', description: "Calendrier Grossesse is a custom wordpress plugin designed for calculating essential dates to ensure the smooth progress of your pregnancy. ", link: 'https://github.com/Rachad-Alabi-ADEKAMBI/pregnancyCalendar' },
      { id: 3, name: 'Blood donor', pic1: 'blood/blood1.jpg', pic2: 'blood/blood2.jpg', pic3: 'blood/blood3.jpg', description: "Blood Donor is an app designed to determine the compatible blood types for blood donation based on your blood type.", link: "https://rachad-alabi-adekambi.github.io/blood_donor" },
      { id: 4, name: 'Eiffel', pic1: 'eiffel/EIFF1.jpg', pic2: 'eiffel/EIFF2.jpg', pic3: 'eiffel/EIFF3.jpg', description: "Conversion of a figma mockup to responsive website", link: "https://rachad-alabi-adekambi.github.io/eiffel/" },
    { id: 5, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: 'rapid-note/rn2.jpg', pic3: 'rapid-note/rn3.jpg', description: "Rapidnote is a secure marketplace for easy cryptocurrency transactions with a handy advertising space feature. ", link: '' },
      { id: 6, name: 'Servicom', pic1: 'servicom/se1.jpg', pic2: 'servicom/se2.jpg', pic3: 'servicom/se3.jpg', description: "Servicom is a custom web app management created with Vue.js and native PHP. This management app is designed to be useful and efficient in handling various tasks such as manage customers list or track some transactions ", link: '' },
       { id: 7, name: 'Parc Auto', pic1: 'parc/parc1.jpg', pic2: 'parc/parc2.jpg', pic3: 'parc/parc3.jpg', description: "Parc-Auto created with Laravel and Vue.js is user-friendly cars marketplace. This platform simplifies the process of browsing and posting car advertisementsr listings and posting advertisements.", link: "" },


      ],
      websites: [
     { id: 0, name: 'La cave des clubs', pic1: 'cave/cav1.jpg', pic2: 'cave/cav2.jpg', pic3: 'cave/cav3.jpg', description: "La Cave des Clubs is a website showcasing beverages from a distribution company.", link: "https://lacavedesclubs.com" },
      { id: 1, name: 'Nbroker.be', pic1: 'nbroker/nb1.jpg', pic2: 'nbroker/nb2.jpg', pic3: 'nbroker/nb3.jpg', description: "Nbroker is a website that helps you compare some loans givers details in order to choose the best one that fits your unique needs.", link: "https://nbroker.be" },
    { id: 2, name: 'Pregnancy Calendar', pic1: 'calendrier/cal1.jpg', pic2: 'calendrier/cal2.jpg', pic3: 'calendrier/cal3.jpg', description: "Calendrier Grossesse is a custom wordpress plugin designed for calculating essential dates to ensure the smooth progress of your pregnancy. ", link: 'https://github.com/Rachad-Alabi-ADEKAMBI/pregnancyCalendar' },
      { id: 3, name: 'Blood donor', pic1: 'blood/blood1.jpg', pic2: 'blood/blood2.jpg', pic3: 'blood/blood3.jpg', description: "Blood Donor is an app designed to determine the compatible blood types for blood donation based on your blood type.", link: "https://rachad-alabi-adekambi.github.io/blood_donor" },
      { id: 4, name: 'Eiffel', pic1: 'eiffel/EIFF1.jpg', pic2: 'eiffel/EIFF2.jpg', pic3: 'eiffel/EIFF3.jpg', description: "Conversion of a figma mockup to responsive website", link: "https://rachad-alabi-adekambi.github.io/eiffel/" },
    { id: 5, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: 'rapid-note/rn2.jpg', pic3: 'rapid-note/rn3.jpg', description: "Rapidnote is a secure marketplace for easy cryptocurrency transactions with a handy advertising space feature. ", link: '' },
      { id: 6, name: 'Servicom', pic1: 'servicom/se1.jpg', pic2: 'servicom/se2.jpg', pic3: 'servicom/se3.jpg', description: "Servicom is a custom web app management created with Vue.js and native PHP. This management app is designed to be useful and efficient in handling various tasks such as manage customers list or track some transactions ", link: '' },
       { id: 7, name: 'Parc Auto', pic1: 'parc/parc1.jpg', pic2: 'parc/parc2.jpg', pic3: 'parc/parc3.jpg', description: "Parc-Auto created with Laravel and Vue.js is user-friendly cars marketplace. This platform simplifies the process of browsing and posting car advertisementsr listings and posting advertisements.", link: "" },

      ],
      plugins: [
  { id: 3, name: 'Calendrier grossesse', pic1: 'calendrier/cal1.jpg', pic2: 'calendrier/cal2.jp', pic3: 'calendrier/cal3.jp', decription: "Calendrier Grossesse is an online tool designed for calculating essential dates to ensure the smooth progress of your pregnancy. This helpful resource is created using WordPress, complemented by a custom plugin for specialized functionalities. The website offers an easy way to track and determine significant milestones during pregnancy. By combining the flexibility of WordPress with a tailored plugin, Calendrier Grossesse underscores my ability to create user-friendly online tools to support a smooth pregnancy journey.", link: '' },
       ],
      details: {},
      elementId: 'yourElementId', // Change this to the ID you want
      activeCategory: 'all', // Default active category
    };
  },
  mounted() {
    this.displayAll();
  },
  computed: {},
  methods: {
    displayAll() {
      this.showAll = true;
      this.showWebsites = false;
      this.showPlugins = false;
      this.showApp = false;
      this.activeCategory = 'all';
      this.showTitle  = true;
      this.showBack = false;
    },
    displayWebsites() {
      this.showAll = false;
      this.showWebsites = true;
      this.showPlugins = false;
      this.showApp = false;
      this.activeCategory = 'websites';
    },
    displayPlugins() {
      this.showAll = false;
      this.showWebsites = false;
      this.showPlugins = true;
      this.showApp = false;
      this.activeCategory = 'plugins';
    },
    getImgUrl(pic) {
      return "img/sites/" + pic;
    },
    displayApp(id){
        this.selectedItemId = id;
        this.showAll = false;
      this.showWebsites = false;
      this.showPlugins = false;
      this.showApp = true;
      this.showImage1 = true;
      this.showImage2 = false;
        this.showImage3 = false;
        this.showTitle = false;
        this.showBack = true;
      },
      displayImage1() {
        this.showImage1 = true;
        this.showImage2 = false;
        this.showImage3 = false;
      },
      displayImage2() {
        this.showImage1 = false;
        this.showImage2 = true;
        this.showImage3 =false;
      },
      displayImage3() {
        this.showImage1 = false;
        this.showImage2 = false;
        this.showImage3 = true;
      },
      getStyles(category) {
      let styles = {
        color: category === this.activeCategory ? '#FFA07F' : 'grey',
        fontSize: '16px',
      };

      return styles;
    },
  }
};
</script>

<style>
  .link{
    cursor: pointer;
  }

  .link:hover{
    color:  #FFA07F;
    font-weight: bold;
  }
</style>