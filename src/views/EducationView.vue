<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <Education/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Education from '@/components/Education.vue'

export default {
name: 'EducationView',
components: {
  Profile,
  Education
}
}
</script>
