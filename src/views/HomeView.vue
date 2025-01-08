<template>
  <div class="container _container">
    <app-header></app-header>
    <app-bank-container></app-bank-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppBankContainer from "../components/AppBankContainer.vue";

export default {
  components: {AppHeader, AppBankContainer}
}

</script>

<style>
</style>