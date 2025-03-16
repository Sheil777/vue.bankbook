<template>
  <div id="popup-add-current-bank" class="popup-add-current-bank popup" :class="{'open': isOpen}" @click="closePopup">
    <div class="popup-add-current-bank__body">
      <div class="popup-add-current-bank__content popup__content">
        <a href="" class="popup-add-current-bank__close" @click.prevent="close"><div></div></a>
        <div class="popup-add-current-bank__header">Выберите банк</div>
        <div class="popup-add-current-bank__banks">
            <div 
              v-for="bank in banks" :key="bank.id"
              class="popup-add-current-bank__bank" 
              style="border-bottom: 1px solid black;"
              :style="{'background': bank.color_bg, 'color': bank.color_text}"
            >
                {{ bank.name }}
            </div>
        </div>
        <div class="popup-add-current-bank__add-new-bank">
          <router-link to="/newBank">
            <a>Новый банк</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isOpen: false,
      banks: [],
    }
  },
  methods: {
    open() {
      this.isOpen = true
      this.bodyLock()
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
    },
    getBanks() {
      const url = `${process.env.VUE_APP_API_URL}/api/v1/banks`

      const token = this.$store.getters['auth/token']

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      axios.get( 
        url,
        config
      ).then((responseText) => {
        this.banks = responseText.data
      })
       .catch(console.log);
    },
    addCurrentBank() {
      // Здесь будет добавляться банк
      
    }
  },
  mounted() {
    this.getBanks()
  },

}
</script>

<style lang="scss" scoped>
$popup-add-current-bank-color: #4f92e0;

.popup-add-current-bank {
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
  
    &.open .popup-add-current-bank__content {
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
  
      border: 2px solid $popup-add-current-bank-color;
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
        background: $popup-add-current-bank-color;
      }
  
      & div:after {
        transform: rotate(-45deg);
      }
  
      & div:before {
        transform: rotate(45deg);
      }
    }

    &__header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      color: $popup-add-current-bank-color;
      font-weight: 600;
      border-bottom: 1px solid black;
    }

    &__bank {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid black;

        &:last-child {
          border-bottom: none;
        }

        &:hover {
          cursor: pointer;
        }
    }

    &__add-new-bank {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid $popup-add-current-bank-color;
            border-radius: 8px;
            width: 130px;
            height: 35px;
            color: $popup-add-current-bank-color;
            font-weight: 600;
        }
    }
  }
</style>