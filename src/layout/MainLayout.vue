<template>
    <router-view/>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('fetchCategories').catch((e) => {
          console.log(e)

          if(e.status == 401) {
            // Человек не авторизирован
            this.$store.commit('auth/logout')
            this.$router.push('/login')
          }
      })

      this.$store.dispatch('selectDate/get')
    },
  }
</script>

<style scoped>

</style>