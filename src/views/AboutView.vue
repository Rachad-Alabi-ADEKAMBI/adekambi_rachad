<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <About/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import About from '@/components/About.vue'

export default {
name: 'AboutView',
components: {
  Profile,
  About
}
}
</script>
