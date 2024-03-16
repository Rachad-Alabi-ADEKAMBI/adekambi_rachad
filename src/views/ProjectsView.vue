<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <Projects/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Projects from '@/components/Projects.vue'

export default {
name: 'ProjectsView',
components: {
  Profile,
  Projects
}
}
</script>
