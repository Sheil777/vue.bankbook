<template>
    <router-view/>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('fetchCategories')
    },
  }
</script>

<style scoped>

</style>