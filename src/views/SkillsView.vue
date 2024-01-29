<template>
  <div class="main">
      <div class="main__card">
        <Profile/>
      </div>

      <div class="main__content">
          <div class="content">
              <Skills/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'

export default {
name: 'SkillsView',
components: {
  Profile,
  Skills
}
}
</script>
