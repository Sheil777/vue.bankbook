<template>
  <div id="popup-delete-current-bank" class="popup-delete-current-bank popup" :class="{'open': isOpen}" @click="closePopup">
    <div class="popup-delete-current-bank__body">
        <div class="popup-delete-current-bank__content popup__content">
            <div class="popup-delete-current-bank__block">
                <div class="popup-delete-current-bank__header">Вы действительно хотите удалить банк "<span>{{ bankName }}</span>"?</div>
                <div class="popup-delete-current-bank__buttons">
                    <div class="popup-delete-current-bank__yes" @click="this.$emit('deleteBank', bankId)">Да</div>
                    <div class="popup-delete-current-bank__no popup-close" @click="close">Нет</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import bodyLock from '@/mixins/bodyLock';

export default {
  props: {
    openPopupDeleteCurrentBank: {
      type: Boolean
    },
  },
  emits: ['closePopup', 'deleteBank'],
  data() {
    return {
      isOpen: false,
      bankId: null,
      bankName: null,
    }
  },
  methods: {
    open(bankId, bankName) {
      this.isOpen = true
      this.bankId = bankId
      this.bankName = bankName
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
    }
  }
}
</script>

<style lang="scss" scoped>
$popup-categories-color: #4f92e0;

.popup-delete-current-bank {
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
  
    &.open .popup-delete-current-bank__content {
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

      padding: 10px;
      box-sizing: border-box;
    }

    &__header {
        margin-top: 25px;
        text-align: center;
        width: 100%;
        height: 50px;
        color: #096cdc;
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
    }

    &__buttons {
        margin-top: 25px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        gap: 50px;

        div {
          &:hover {
            cursor: pointer;
          }
        }
    }

    &__yes, &__no {
        width: 85px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 4px;
        font-size: 18px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__yes {
        background-color: #096cdc;
    }

    &__no {
        background-color: #4f92e0;
    }
  }
</style>