<template>
    <div :class="['popup-input-percentage', {'open': isOpen}]" @click="close">
        <div class="popup-input-percentage__body">
            <div class="popup-input-percentage__content popup__content">
                <div class="popup-close"></div>
                <div class="popup-input-percentage__header">Введите процент</div>
                <form class="popup-input-percentage__form" v-if="category" @submit.prevent="submit">
                    <div class="category">
                        <div class="_categoryLogo">
                            <img 
                                :style="{backgroundColor: category.backgroundColor ? category.backgroundColor : 'rgb(108, 32, 183)'}" 
                                :src="imgSrc" 
                                alt=""
                            >
                        </div>
                        <div class="category__text">
                            <input :class="{'error': error}" type="tel" ref="inputField" v-model="percent" @input="checkInput" required>
                            <span>% {{ category.name }}</span>
                        </div>
                    </div>
                    <div class="popup-input-percentage__button">
                        <button class="popup-input-percentage__submit" type="submit" :disabled="error">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
    data() {
        return {
            isOpen: false,
            imgSrc: require('../../assets/img/icons/package.svg'),
            category: null,
            percent: null,
            bankId: null,
            error: false
        }
    },
    methods: { 
        open(category, bankId) {
            this.isOpen = true;
            this.category = category
            this.bankId = bankId
            this.imgSrc = category.img ? require('../../assets/img/icons/' + category.img) : require('../../assets/img/icons/package.svg')

            setTimeout(()=> {
                nextTick(() => {
                    this.$refs.inputField.focus()
                })
            }, 500)
        },
        close(e){
            // Если у родителей нажатой области нет .popup__content, значит это темная область
            if(!e.target.closest('.popup__content')) {
                this.isOpen = false
                // this.bodyUnlock()
            }
            if(e.target.closest('.popup-close')) {
                this.isOpen = false
                // this.bodyUnlock()
            }
        },
        checkInput(){
            this.percent = this.percent.replace(/[^0-9.]/g, '')
            this.percent = this.percent.slice(0, 4)

            if(this.percent > 999) 
                this.error = true
            else
                this.error = false

        },
        submit() {
            console.log("submit")

            this.$store.dispatch('currentBanks/addCurrentCategory', {
                bank_id: this.bankId,
                percent: this.percent,
                category_id: this.category.id,
            }).then(() => {
                console.log('succ')
            }).catch(() => {
                console.log('err')
            })

            this.percent = null
            this.isOpen = false
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
        transition: 0.4s;
      
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

        &__button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 0 15px 0;
        }

        &__submit {
            background-color: #43679b;
            color: white;
            width: 110px;
            height: 30px;
            border-radius: 10px;
            font-family: inherit;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #5583c2;
            }

            &[disabled] {
                background: #e7e7e7;
                color: #707070;
                cursor: default;
            }
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

                &.error {
                    border: 1px solid red;

                    &:focus {
                        outline: 1.5px solid red;
                    }
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