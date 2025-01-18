<template>
  <div class="container _container">
    <the-header></the-header>
    <h1>Меню</h1>
    <div class="main">
        <router-link to="/categories">
            <a class="main__item">Категории</a>
        </router-link>
        <router-link to="/newCategory">
            <a class="main__item">Добавить категорию</a>
        </router-link>
        <a href="#popup-add-current-bank" class="main__item popup-link">Добавить новый банк</a>
        <div class="main__item main-month _no-hover">
            <a class="main-month__left hide">
            </a>Дата:&nbsp;<span class="main-month__text">январь</span>&nbsp;
            <span class="main-month__year">2025</span>&nbsp;г.
            <a class="main-month__right"></a>
        </div>
        <router-link to="/Login">
            <a class="main__item">Выход</a>
        </router-link>
    </div>
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
        display: flex;
        justify-content: left;
        align-items: center;
        height: 50px;
        width: 100%;
        background-color: white;
        font-size: 20px;
        border-bottom: 1px solid black;
        color: black;

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