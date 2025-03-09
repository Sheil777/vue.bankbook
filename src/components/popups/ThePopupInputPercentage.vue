<template>
    <div class="popup-input-percentage">
        <div class="popup-input-percentage__body">
            <div class="popup-input-percentage__content">
                <div class="popup-close"></div>
                <div class="popup-input-percentage__header">Введите процент</div>
                <form class="popup-input-percentage__form">
                    <div class="category">
                        <div class="_categoryLogo">
                            <img 
                                :style="{backgroundColor: backgroundColor ? backgroundColor : 'rgb(108, 32, 183)'}" 
                                :src="imgSrc" 
                                alt=""
                            >
                        </div>
                        <div class="category__text">
                            <input type="phone">
                            <span>% Все покупки</span>
                        </div>
                    </div>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            backgroundColor: "",
            imgSrc: require('../../assets/img/icons/package.svg'),
        }
    }
}
</script>

<style lang="scss" scoped>
    $popup-categories-color: #4f92e0;

    .popup-input-percentage {
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
            
            width: 100%;
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
    }

    .category {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 50px;
        font-size: 20px;

        &__text {
            input {
                border: 1px solid $popup-categories-color;
                border-radius: 2px;
                font-size: inherit;
                width: 45px;
                text-align: right;

                &:focus {
                    outline: 1.5px solid $popup-categories-color;
                }
            }

            span {
                margin-left: 3px;
            }
        }
    }

    /*
    

  .popup-categories {
  
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
    
    
    
    */
</style>