<template>
  <div class="infos">
    <div class="message">
      <div class="message__text">
        <p>Available for freelance work</p>
      </div>
      <div class="message__btn">
              <a href='mailto:adekambirachad@gmail.com'>
                <i class="fas fa-download"></i>
              </a>
          </div>
    </div>

    <h1>My portfolio</h1>

    <div class="portfolio">
      <div class="portfolio__menu">
        <span @click="displayAll()">All</span>
        <span @click="displayWebsites()">Websites</span>
        <span @click="displayPlugins()">API projects and WordPress plugins</span>
      </div>

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
            </h4>

            <p>
              Site e-commerce sale of jewelry and accessories for men women
              and children in Benin. I realized this site with wordpress and
              I also realize plugin customize for the management of
              the delivery. <br>
              Link: <span> <a href="">https://trendsconceptstore.com/</a> </span>

            </p>


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
      all: [
        { id: 0, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: 'nbroker/nb2.jpg', pic3: 'nbroker/nb3.jpg' },
        { id: 1, name: 'Parc Auto', pic1: 'parc/parc1.jpg', pic2: 'parc/parc2.jpg', pic3: 'parc/parc3.jpg' },
        { id: 2, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: 'rapid-note/rn2.jpg', pic3: 'rapid-note/rn3.jpg', },
        { id: 3, name: 'Immobilier Benin', pic1: 'immo/im1.jpg', pic2: 'immo/im2.jpg', pic3: 'immo/im3.jpg', },
      ],
      websites: [
        { id: 1, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 2, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 3, name: 'Parc Auto', pic1: 'parc/pa1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 4, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: '/sites/nbroker/nb2.jpg' },

      ],
      plugins: [
        { id: 1, name: 'Parc Auto', pic1: 'parc/pa1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 2, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 3, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 4, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
      ],
      details: {}
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
    },
    displayWebsites() {
      this.showAll = false;
      this.showWebsites = true;
      this.showPlugins = false;
      this.showApp = false;
    },
    displayPlugins() {
      this.showAll = false;
      this.showWebsites = false;
      this.showPlugins = true;
      this.showApp = false;
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
      }

  }
};
</script>
