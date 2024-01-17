<template>
  <div class="infos">
    <div class="message">
      <div class="message__text">
        <p>Available for freelance work</p>
      </div>
      <div class="message__btn">
        <i class="fas fa-download"></i>
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
          <img :src="getImgUrl(detail.pic1)" alt="">
        </div>
      </div>

      <div class="portfolio__items" v-if="showWebsites">
        <div class="item" v-for="detail in websites" :key="detail.id">
          <img :src="getImgUrl(detail.pic1)" alt="">
        </div>
      </div>

      <div class="portfolio__items" v-if="showPlugins">
        <div class="item" v-for="detail in plugins" :key="detail.id">
          <img :src="getImgUrl(detail.pic1)" alt="">
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
      all: [
        { id: 1, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 2, name: 'Parc Auto', pic1: 'parc/pa1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 3, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 4, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
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
      ]
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
    },
    displayWebsites() {
      this.showAll = false;
      this.showWebsites = true;
      this.showPlugins = false;
    },
    displayPlugins() {
      this.showAll = false;
      this.showWebsites = false;
      this.showPlugins = true;
    },
    getImgUrl(pic) {
      return "img/sites/" + pic;
    },
    displayApp(id){
        this.id = id;

    }
  }
};
</script>
