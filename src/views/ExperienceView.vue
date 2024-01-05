<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <Experience/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Experience from '@/components/Experience.vue'

export default {
name: 'ExperienceView',
components: {
  Profile,
  Experience
}
}
</script>
