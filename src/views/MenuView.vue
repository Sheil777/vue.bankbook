<template>
  <div class="container _container">
    <app-header></app-header>
    <h1>Меню</h1>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {AppHeader}
}
</script>

<style lang="scss">
  @import '../assets/css/unit';

  .main {
      &__item {
          justify-content: center;
          background-color: white;
          // color: white;]
          transition: all 0.2s;

          &:hover {
              cursor: pointer;
              background-color: #c3ddff;
              color: #0d4188;
          }
      }
  }

  .main-month {
      position: relative;

      &__right, &__left {
          position: absolute;
          display: block;
          content: "";
          border: 14px solid transparent; 
          transition: all 0.2s;

          &:hover {
              cursor: pointer;
          }

          &.hide {
              display: none;
          }
      }

      &__right {
          right: 0px;
          border-left: 20px solid #5382c4;
      }

      &__left {
          left: 0px;
          border-right: 20px solid #5382c4;
      }
  }
</style>