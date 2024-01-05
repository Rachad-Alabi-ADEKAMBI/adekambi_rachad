<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <Portfolio/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Portfolio from '@/components/Portfolio.vue'

export default {
name: 'PortfolioView',
components: {
  Profile,
  Portfolio
}
}
</script>
