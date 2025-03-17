import axios from 'axios'

export default {
    namespaced: true,

    state() {
        return {
            currentBanks: []
        }
    },
    mutations: {
        setCurrentBanks(state, payload) {
            state.currentBanks = payload
        },
        addCurrentCategory(state, payload) {
            // Добавление в массив
            const cats = state.currentBanks.filter(i => { return i.id === payload.bank_id })[0].categories    // Получаем все категории банка
            let newCat = {}         // Создаем объект в котором опишем новую категорию
            Object.assign(newCat, payload.selectedCategory)
            newCat.name = payload.percent + '% ' +newCat.name
            newCat.noActive = false
            newCat.idCC = payload.id;      
            cats.push(newCat)
        },
        removeCurrentBank(state, bankId) {
            // Удаление из массива
            const index = state.currentBanks.findIndex(bank => bank.id === bankId);
            if (index !== -1) {
                state.currentBanks.splice(index, 1);
            }
        },
    },
    actions: {
        async fetchCurrentBanks({ commit, rootGetters }) {
            return new Promise((resolve, reject) => {
                const token = rootGetters['auth/token']
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                axios.get( 
                    `${process.env.VUE_APP_API_URL}/api/v1/currentCategory`,
                    config
                ).then((responseText) => {
                    commit('setCurrentBanks', responseText.data)
                    resolve()
                }).catch((e) => {
                    reject(e)
                });
            })
        },
        async addCurrentCategory({ commit, rootGetters }, payload) {
            return new Promise((resolve, reject) => {
                const body = {    
                    "bank_id": payload.bank_id,
                    "percent": payload.percent,
                    "category_id": payload.category_id,
                    "always": 0,
                }
                const token = rootGetters['auth/token']
                const config = {
                  headers: { Authorization: `Bearer ${token}` }
                };
          
                axios.post( 
                  `${process.env.VUE_APP_API_URL}/api/v1/currentCategory`,
                  body,
                  config
                ).then((responseText) => {
                    responseText.data.selectedCategory = rootGetters.category(payload.category_id)
                    commit('addCurrentCategory', responseText.data)
                }).catch((e) => {
                  console.log(e)
                });

            })
        },
        async addCurrentBank({ rootGetters }, bankId) {
            return new Promise((resolve, reject) => {
                const body = {     
                    "bank_id": bankId,
                    "percent": 0,
                    "category_id": 0,
                    "always": 1
                }
                const token = rootGetters['auth/token']
                const config = {
                  headers: { Authorization: `Bearer ${token}` }
                };
          
                axios.post( 
                  `${process.env.VUE_APP_API_URL}/api/v1/currentCategory`,
                  body,
                  config
                ).then(() => {
                    resolve()
                }).catch((e) => {
                    reject(e)
                })
            })
        },
        async removeCurrentBank({ rootGetters }, bankId) {
            return new Promise((resolve, reject) => {
                const token = rootGetters['auth/token']
                const config = {
                  headers: { Authorization: `Bearer ${token}` }
                };
          
                axios.delete( 
                  `${process.env.VUE_APP_API_URL}/api/v1/currentBank/${bankId}`,
                  config
                ).then(() => {
                    resolve()
                }).catch((e) => {
                    reject(e)
                })
            })
        }
    },
    getters: {
        currentBanks(state) {
            return state.currentBanks
        },
    }
}