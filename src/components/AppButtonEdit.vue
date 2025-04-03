<template>
    <div class="button-edit">
      <div class="button-edit__container" :class="{'active': active}">
          <div class="button-edit__edit" :class="{'active': active, 'disabled': buttonEditDisabled}" @click="toggleEditing">
              <span :class="{'active': active}">Редактирование</span>
              <img src="../assets/img/icons/edit_white.svg" alt="">
          </div>
          <router-link to="/menu">
            <a class="button-edit__newBank" :class="{'active': active}">
                <span :class="{'active': active}">Меню</span>
                <img src="../assets/img/icons/bank.svg" alt="">
            </a>
          </router-link>
          <div class="button-edit__toggle" @click="active = !active">
              <img src="../assets/img/icons/edit_white.svg" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    emits: ['toggleEditing'],
    computed: {
        buttonEditDisabled() {
            if(this.$store.state.currentBanks.currentBanks.length != 0)
                return false // Кнопка активна
            else
                return true // Кнопка не активна
        }
    },
    data(){
      return {
        active: false,
      }
    },
    methods: {
        toggleEditing() {
            this.$emit('toggleEditing')
            this.active = false
        }
    },
}
</script>

<style lang="scss" scoped>
  .button-edit {
      position: fixed;
      bottom: 20px;
      right: 20px;

      &__container {
          &::after {
              display: block;
              content: '';
              position: relative;
              right: 0;
              bottom: 0;
              z-index: 0;
              // box-shadow: -61px -40px 40px 0 rgba(255, 255, 255, 1);
              box-shadow: 0 -40px 40px 0 rgba(255, 255, 255, 1);
              transition: all 0.6s;
          }

          &.active {
              &::after {
                  box-shadow: -61px -40px 40px 142px rgba(255, 255, 255, 1);
                  // box-shadow: 0 -40px 40px 142px rgba(255, 255, 255, 1);
              }
          }
      }

      &__toggle {
          width: 50px;
          height: 50px;
          background-color: rgb(79,146,224);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
          position: relative;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; 
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

          img {
              width: 25px;
              -webkit-filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
              filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
              transition: all 0.1s;
          }

          &:active img{
              -webkit-filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .7));
              filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .7));
              transform: translateY(2px);
          }
      }

      &__edit, &__newBank {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: rgb(79,146,224);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: bottom .5s, background-color .3s;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; 
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          z-index: 1;

          &.clicked {
              background-color: rgb(67, 103, 155);
          }

          span {
              position: absolute;
              font-size: 15px;
              white-space: nowrap;
              overflow: hidden;
              transition: .5s;
              width: 0;
              right: 40px;
              text-align: right;
              color: black;

              // -webkit-box-shadow: 0px 0px 40px -2px rgba(255, 255, 255, 1);
              // -moz-box-shadow: 0px 0px 40px -2px rgba(255, 255, 255, 1);
              // box-shadow: 0px 0px 40px -2px rgba(255, 255, 255, 1);

              &.active {
                  width: 131px;
              }
          }

          img {
              width: 15px;
              -webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
              filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
              transition: all 0.1s;
          }

          &:active img{
              -webkit-filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .7));
              filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .7));
              transform: translateY(1px);
          }

          &.disabled {
            background: #e7e7e7;
            cursor: default;

            span {
                color: #a8a8a8;
            }

            &:active img {
                -webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
                filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7));
                transform: none;
            }
          }
      }

      &__edit {
          bottom: 10px;
          right: 10px;
          &.active {
              bottom: 98px;
          }
      }

      &__newBank {
          bottom: 10px;
          right: 10px;

          &.active {
              bottom: 58px;
          }

          img {
              width: 18px;
          }
      }

  }
</style>