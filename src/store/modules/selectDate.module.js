import axios from 'axios'

export default {
    namespaced: true,

    state() {
        return {
          selectDate: null,
          selectMonthName: null,
          monthName: {
            1: 'Январь',
            2: 'Февраль',
            3: 'Март',
            4: 'Апрель',
            5: 'Май',
            6: 'Июнь',
            7: 'Июль',
            8: 'Август',
            9: 'Сентябрь',
            10: 'Октябрь',
            11: 'Ноябрь',
            12: 'Декабрь',
          }
        }
    },
    mutations: {
      setSelectDate(state, date) {
        state.selectDate = date
        state.selectMonthName = state.monthName[date.month]
      }
    },
    actions: {
      get({ commit, rootGetters }) {
        const url = `${process.env.VUE_APP_API_URL}/api/v1/selectDate`
        const token = rootGetters['auth/token']
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get(url, config).then(response => {
            // запрос выполнен успешно
            
            commit('setSelectDate', response.data)
        }).catch(e => {
            console.log(e)
        })
      }
    },
    getters: {
      selectDate(state) {
        return state.selectDate;
      },
      monthName(state) {
        return state.selectMonthName
      }
    }

}