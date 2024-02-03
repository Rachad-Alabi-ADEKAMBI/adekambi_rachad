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

            <div class="project__btns">
              <span @click=displayImg(1) >* </span>
              <span @click=displayImg(2) >* </span>
              <span @click=displayImg(3) >* </span>
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
        { id: 0, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 1, name: 'Parc Auto', pic1: 'parc/pa1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 2, name: 'Rapid note', pic1: 'rapid-note/rn1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
        { id: 3, name: 'Nbroker', pic1: 'nbroker/nb1.jpg', pic2: '/sites/nbroker/nb2.jpg' },
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
      },
      displayImage(id) {
  this.showImage[id] = true;
  for (let otherId in this.showImage) {
    if (otherId !== id) {
      this.showImage[otherId] = false;
    }
  }
}

  }
};
</script>
