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
        <a class="main__item" @click="$refs.popupAddCurrentBankRef.open()">Добавить новый банк</a>
        <div class="main__item main-month _no-hover">
            <a class="main-month__left" :class="{'hide': arrowMonth}" @click="prevMonth">
            </a>Дата:&nbsp;<span class="main-month__text">{{ month }}</span>&nbsp;
            <span class="main-month__year">{{ year }}</span>&nbsp;г.
            <a class="main-month__right" :class="{'hide': !arrowMonth}" @click="nextMonth"></a>
        </div>
        <a class="main__item" @click.prevent="logout">Выход</a>
    </div>
    <app-popup-add-current-bank ref="popupAddCurrentBankRef"></app-popup-add-current-bank>
  </div>
</template>

<script>
import AppPopupAddCurrentBank from '@/components/popups/AppPopupAddCurrentBank.vue';
import axios from 'axios'

export default {
    data() {
        return {
            arrowMonth: true,
            // year: null,
            // month: null,
        }
    },
    computed: {
        month() {
            if(this.$store.state.selectDate.selectMonthName == undefined)
                return this.$store.state.selectDate.monthName[Number(new Date().getMonth() + 1)]
            else
                return this.$store.state.selectDate.selectMonthName
        },
        year() {
            try {
                return this.$store.state.selectDate.selectDate.year
            } catch(e) {
                return new Date().getFullYear()
            }
        }
    },
    methods: {
        nextMonth() {
            const url = `${process.env.VUE_APP_API_URL}/api/v1/selectDate/next`
            const token = this.$store.getters['auth/token']
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.post(url, {}, config).then(response => {
                // запрос выполнен успешно

                // изменяем направление стрелки
                this.arrowMonth = false

                // обновляем текущие категории
                this.$store.dispatch('currentBanks/fetchCurrentBanks')

                // Меняем месяц во vuex
                const currentMonth = new Date().getMonth() + 1;
                const currentYear = new Date().getFullYear();
                if(currentMonth == 12) {
                    this.$store.commit('selectDate/setSelectDate', {
                        month: 1,
                        year: currentYear+1
                    })
                }else{
                    this.$store.commit('selectDate/setSelectDate', {
                        month: currentMonth+1,
                        year: currentYear
                    })
                }
            }).catch(e => {
                console.log(e)
            })
        },
        prevMonth() {
            
            const url = `${process.env.VUE_APP_API_URL}/api/v1/selectDate/prev`
            const token = this.$store.getters['auth/token']
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.post(url, {}, config).then(response => {
                // запрос выполнен успешно
                
                // изменяем направление стрелки
                this.arrowMonth = true

                // обновляем текущие категории
                this.$store.dispatch('currentBanks/fetchCurrentBanks')

                // Меняем месяц во vuex
                const currentMonth = new Date().getMonth() + 1;
                const currentYear = new Date().getFullYear();
                
                this.$store.commit('selectDate/setSelectDate', {
                    month: currentMonth,
                    year: currentYear
                })
                
                    
            }).catch(e => {
                console.log(e)
            })     
        },
        setArrow(month, year) {
            const currentMonth = new Date().getMonth() + 1;
            const currentYear = new Date().getFullYear();

            if(month != currentMonth)
                this.arrowMonth = false

        },
        logout() {
            this.$store.dispatch('auth/logout')
            this.$store.commit('auth/logout')
            this.$router.push('/login')
        }
    },
    components: {AppPopupAddCurrentBank},
    created() {    
        let dates = this.$store.getters['selectDate/selectDate']

        if(dates) {
            this.setArrow(dates.month, dates.year)
        }else{
            let count = 0
            let timer = setInterval(() => {
                dates = this.$store.getters['selectDate/selectDate']

                if(dates) {
                    this.setArrow(dates.month, dates.year)
                    clearInterval(timer)
                }
                
                if(count > 3) {
                    clearInterval(timer)
                }

                count++
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
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