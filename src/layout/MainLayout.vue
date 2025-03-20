<template>
    <router-view/>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('fetchCategories')

      this.$store.dispatch('selectDate/get')
    },
  }
</script>

<style scoped>

</style>