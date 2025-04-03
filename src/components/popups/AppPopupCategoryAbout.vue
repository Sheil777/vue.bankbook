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
                <div class="popup-category-about__logo _categoryLogo" >
                    <img :style="{backgroundColor: imgBackground}" :src="img" alt="">
                </div>
                <div id="popup-category-about__name" class="popup-category-about__name">{{ name }}</div>
            </div>
            <div id="popup-category-about__about" class="popup-category-about__about">
                {{ about }}
            </div>
            <div id="popup-category-about__shops" class="popup-category-about__shops" v-if="addStoreVisible || shops.length">
                <div>Магазины:</div>
                <ul>
                    <li v-for="shop in shops" :key="shop" @click="openShopMethod(shop.id)">
                      <span>{{ shop.name }}</span>
                      <span class="add-store__delete" :class="{'open': openShop == shop.id}" @click="removeShop(shop.id)">✕</span>
                    </li>
                    <li class="add-store" :class="{'active': addStoreVisible}">
                      <input class="add-store__input" type="text" placeholder="Введите наименование" ref="inputField" @keypress.enter="addStore" v-model="inputAddStore">
                      <div class="add-store__submit" @click="addStore" >&#10003;</div>
                    </li>
                </ul>
            </div>
            <div class="_button add-store__button" :class="{'hidden': addStoreVisible}">
              <a href="#" @click.prevent="showAddStore">Добавить магазин</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { nextTick } from 'vue';

export default {
    props: {
      editing: {
        type: Boolean,
      },
    },
    data() {
      return {
        isOpen: false,
        idCategory: null,
        name: null,
        img: require('../../assets/img/icons/package.svg'),
        imgBackground: 'rgb(108, 32, 183)',
        about: 'Описание отсутствует',
        shops: [],
        addStoreVisible: false,
        inputAddStore: '',
        openShop: -1,
        mcc: null,
      }
    },
    methods: {
      openShopMethod(id) {
        // Если магазин принадлежит пользователю, то показываем крестик
        if(this.shops.filter(shop => shop.id == id)[0].user != 0)
          if(this.openShop == id)
            this.openShop = -1
          else
            this.openShop = id
      },  
      addStore() {
        if(this.inputAddStore.trim() != '') {
          // Добавление и очистка формы
          this.$store.dispatch('addShopAction', {
            mcc: this.mcc,
            name: this.inputAddStore.trim(),
            idCategory: this.idCategory,
          })
          this.inputAddStore = ''
        }
      },
      showAddStore() {
        this.addStoreVisible = true

        setTimeout(()=> {
            nextTick(() => {
                this.$refs.inputField.focus()
            })
        }, 250)
      },
      removeShop(idShop) {
        this.$store.dispatch('removeShopAction', {
          idShop: idShop,
          idCategory: this.idCategory
        })
      },
      open(category) {
        if(!this.editing){ // чтобы не открывалось описание при удалении или редактировании
          this.idCategory = category.id
          this.name = category.name
          this.imgBackground = category.backgroundColor ? category.backgroundColor : 'rgb(108, 32, 183)'
          this.img = category.img ? require('../../assets/img/icons/' + category.img) : require('../../assets/img/icons/package.svg')
          this.about = category.about ? category.about : 'Описание отсутствует'
          const shops = this.$store.state.categories.filter(item => {return item.id == category.id})[0].shops
          this.shops = shops ? shops : []
          this.mcc = category.mcc_id

          this.isOpen = true
          this.bodyLock()
        }
      },
      close(){
        this.isOpen = false
        this.bodyUnlock()
        this.addStoreVisible = false
        this.openShop = -1
      },
      closePopup(e){
        // Если у родителей нажатой области нет .popup__content, значит это темная область
        if(!e.target.classList.contains('add-store__delete'))
          if(!e.target.closest('.popup__content')) {
            this.close()
          }
      }
    },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables';

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
      color: black;
  
      border: 2px solid $popup-categories-color;
      box-shadow: 0 0 13px 5px rgba(79, 146, 224, 0.6);
      position: relative;
  
      transition: 0.8s;
      opacity: 0;
      transform: perspective(400px) translate(0px, -120%) rotateX(45deg);
      
      width: 100%;
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

  .add-store {
    margin-top: 4px;
    display: none;

    &.active {
        display: flex;
    }

    &__input {
        font-size: 20px;
        // border: 2px solid $popup-add-current-bank-color;
        border-bottom: 2px solid $popup-add-current-bank-color;
        // border-radius: 5px;
        height: 30px;
        max-width: 235px;
        padding-left: 4px;
        outline: none;
    }

    &__submit {
        display: flex;
        border: 2px solid $popup-add-current-bank-color;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: $popup-add-current-bank-color;
        font-weight: 500;
        font-size: 16px;

        cursor: pointer;
    }

    &__button.hidden {
      display: none;
    }

    &__delete {
      display: inline-block;
      color: darkred; 
      margin-left: 8px; 
      cursor: pointer;
      transform: translateX(-11px);
      transition: transform 0.5s, visibility 0.1s;
      visibility: hidden;

      &.open {
        visibility: visible;
        transform: translateX(0);
      }
    }
  }
</style>