<template>
  <div 
    id="popup-categories" 
    class="popup-categories popup" 
    :class="{'open': isOpen}"
    @click="close"
  >
    <div class="popup-categories__body">
        <div class="popup-categories__content popup__content">
            <a class="popup-categories__close popup-close" @click="close"><div></div></a>
            <div class="popup-categories__header">Выберите категорию</div>
            
            <app-category
              v-for="category in currentCategories" :key="category.id"
              :img="category.img"
              :background-color="category.backgroundColor"
              @click="this.$emit('add', category, bankId)"
            >{{ category.name }}</app-category>

        </div>
    </div>
  </div>
</template>

<script>
import AppCategory from '../AppCategory.vue';

export default {
  props: {
    openPopupAddCurrentCategory: {
      type: Boolean
    },
    currentCategories: {
      type: Array
    },
  },
  data() {
    return {
      isOpen: false,
      bankId: null,
    }
  },
  methods: {
    open(bank) {
      this.isOpen = true;
      this.bankId = bank;
      this.bodyLock();
      // console.log(this.currentCategories)
    },
    close(e){
      // Если у родителей нажатой области нет .popup__content, значит это темная область
      if(!e.target.closest('.popup__content')) {
        this.isOpen = false
        this.bodyUnlock()
      }
      if(e.target.closest('.popup-close')) {
        this.isOpen = false
        this.bodyUnlock()
      }
    },
  },
  components: {
    AppCategory
  }
}
</script>

<style lang="scss" scoped>
  $popup-categories-color: #4f92e0;

  .popup-categories {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    z-index: 100;
  
    opacity: 0;
    visibility: hidden;
    transition: 0.8s;
  
    overflow-y: auto;
    overflow-x: hidden;
  
    &.open {
      opacity: 1;
      visibility: visible;
    }
  
    &.open .popup-categories__content {
      opacity: 1;
      // transform: translate(0px, 0px);
      transform: perspective(400px) translate(0px, 0px) rotateX(0deg);
    }

    &__noVisible {
      display: none;
    }

    &__header {
      width: 100%;
      color: $popup-categories-color;
      font-weight: 600;

      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: 20px;
      border-bottom: 1px solid black;
    }
  
    &__body {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3vw 5vw;
      box-sizing: border-box;
      max-width: 550px;
      margin: 0 auto;
    }
  
    &__content {
      background-color: white;
      //background: #141414;
      color: black;
  
      border: 2px solid $popup-categories-color;
      box-shadow: 0 0 13px 5px rgba(79, 146, 224, 0.6);
      position: relative;
  
      transition: 0.8s;
      opacity: 0;
      // transform: translate(0px, -100%);
      transform: perspective(400px) translate(0px, -120%) rotateX(45deg);
      
      width: 100%;
    }
  
    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
  
      & div {
        width: 30px;
        height: 30px;
        position: relative;
      }
  
      & div:after, & div:before {
        position: absolute;
        top: 15px;
        left: 0;
  
        content: "";
        display: block;
        width: 30px;
        height: 3px;
        background: $popup-categories-color;
      }
  
      & div:after {
        transform: rotate(-45deg);
      }
  
      & div:before {
        transform: rotate(45deg);
      }
    }
  }
</style>