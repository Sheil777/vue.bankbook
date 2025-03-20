import axios from 'axios'

export default {
    namespaced: true,

    state() {
        return {
          selectDate: null,
        }
    },
    mutations: {
      setSelectDate(state, date) {
        state.selectDate = date
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
      }
    }

}