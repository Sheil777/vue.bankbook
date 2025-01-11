<template>
  <div class="container _container">
    <the-header></the-header>
    <h1>Меню</h1>
  </div>
</template>

<script>


export default {
    
}
</script>

<style lang="scss">
  // @import '../assets/css/unit';

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        position: relative;
        background-color: #5382c4; 
        color: white;
    }

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