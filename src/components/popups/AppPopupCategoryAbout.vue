<template>
  <div 
    id="popup-category-about" 
    class="popup-category-about popup" 
    :class="{'open': isOpen}" 
    @click="closePopup"
  >
    <div class="popup-category-about__body">
        <div class="popup-category-about__content popup__content">
            <a class="popup-category-about__close" @click="close"><div></div></a>
            <div class="popup-category-about__header">
                <div id="popup-category-about__logo" class="popup-category-about__logo category__logo" >
                    <img style="background-color: rgb(108, 32, 183)" src="../../assets/img/icons/package.svg" alt="">
                </div>
                <div id="popup-category-about__name" class="popup-category-about__name">1% Все покупки</div>
            </div>
            <div id="popup-category-about__about" class="popup-category-about__about">
                1% на все покупки за каждые 100 руб.
            </div>
            <div id="popup-category-about__shops" class="popup-category-about__shops">
                <div>Магазины:</div>
                <ul>
                    <li>Электрон</li>
                    <li>Пятерочка</li>
                    <li>Магнит</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      editing: {
        type: Boolean,
      }
    },
    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      open() {
        if(!this.editing){ // чтобы не открывалось описание при удалении или редактировании
          this.isOpen = true
          this.bodyLock()
        }
      },
      close(){
        this.isOpen = false
        this.bodyUnlock()
      },
      closePopup(e){
        // Если у родителей нажатой области нет .popup__content, значит это темная область
        if(!e.target.closest('.popup__content')) {
          this.close()
        }
      }
    },
}
</script>

<style lang="scss">
$popup-categories-color: #4f92e0;

.popup-category-about {
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
  
    &.open .popup-category-about__content {
      opacity: 1;
      // transform: translate(0px, 0px);
      transform: perspective(400px) translate(0px, 0px) rotateX(0deg);
    }
  
    &__body {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5vw;
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
      // min-height: 200px;
    }

    &__header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        color: black;
        font-size: 20px;
        padding-right: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid black;
    }

    &__about {
        padding: 15px;
        font-size: 20px;
    }

    &__shops {
        padding: 15px;
        font-size: 20px;

        div {
            margin-bottom: 5px;
        }

        ul {
            margin-left: 20px;
        }
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