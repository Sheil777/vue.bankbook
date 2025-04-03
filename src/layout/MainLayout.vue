<template>
    <router-view/>
</template>

<script>
  export default {
    created() {
      // Получаем текущие категории
      this.$store.dispatch('currentBanks/fetchCurrentBanks').catch((e) => {
        console.log(e)
      })

      // Получаем все категории доступные пользователю
      this.$store.dispatch('fetchCategories').catch((e) => {
          console.log(e)

          if(e.status == 401) {
            // Человек не авторизирован
            this.$store.commit('auth/logout')
            this.$router.push('/login')
          }
      })

      // Получаем банки, который можно добавить
      this.$store.dispatch('banks/fetchBanks')

      this.$store.dispatch('selectDate/get')
    },
  }
</script>

<style scoped>

</style>