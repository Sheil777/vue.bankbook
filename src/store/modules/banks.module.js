import axios from 'axios'

export default {
  namespaced: true,

  state() {
      return {
          banks: []
      }
  },
  mutations: {
    // Удаляет банк из массива
    removeBank(state) {
      // Вырезаем банк из массива
      var index = state.banks.map(bank => {
        return bank.id;
      }).indexOf(bankId);
      state.banks.splice(index, 1)
    }
  },
  actions: {
    fetchBanks({ state, rootGetters }) {
      const url = `${process.env.VUE_APP_API_URL}/api/v1/currentBank/available`

      const token = rootGetters['auth/token']

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      axios.get( 
        url,
        config
      ).then((responseText) => {
        state.banks = responseText.data
      })
       .catch(console.log);
    },
  }
}