import { createStore, createLogger } from "vuex"
import auth from "./modules/auth.module"
import currentBanks from "./modules/currentBanks.module"
import selectDate from "./modules/selectDate.module"
import banks from "./modules/banks.module"
import axios from "axios"

const plugins = []

// Если находимся в разработке проекта
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger)
}

export default createStore({
    plugins,
    state() {
        return {
            // categories: [
            //     {
            //       id: 1,
            //       name: "Книги",
            //       img: "book.svg",
            //       backgroundColor: "#f5770a",
            //       about: null,
            //       shops: [
            //         {
            //           id: 1,
            //           name: 'Читай город',
            //         },
            //       ]
            //     },
            //     {
            //       id: 2,
            //       name: "Все покупки",
            //       img: "package.svg",
            //       backgroundColor: 'rgb(108, 32, 183)',
            //       about: '1% на все покупки за каждые 100 руб.',
            //       shops: [],
            //     },
            //     {
            //       id: 3,
            //       name: "Транспорт",
            //       img: "train.svg",
            //       backgroundColor: null,
            //       about: null,
            //       shops: [],
            //     },
            //     {
            //       id: 4,
            //       name: "Цифровые товары",
            //       img: "package.svg",
            //       backgroundColor: null,
            //       about: null,
            //       shops: [],
            //     },
            //     {
            //       id: 5,
            //       name: "Активный отдых",
            //       img: "package.svg",
            //       backgroundColor: null,
            //       about: null,
            //       shops: [],
            //     },
            //     {
            //       id: 6,
            //       name: "Красота",
            //       img: "package.svg",
            //       backgroundColor: null,
            //       about: null,
            //       shops: [],
            //     },
            //     {
            //       id: 7,
            //       name: "Заправки",
            //       img: "fuel.svg",
            //       backgroundColor: '#42aaff',
            //       about: null,
            //       shops: [
            //         {id: 2, name: 'Лукойл'},
            //         {id: 3, name: 'ГазпромНефть'},
            //         {id: 4, name: 'Роснефть'},
            //       ]
            //     },
            //     {
            //       id: 10,
            //       name: "Такси",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 11,
            //       name: "Платные дороги",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 12,
            //       name: "АЗС",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [
            //         {id: 5, name: 'Лукойл'},
            //         {id: 6, name: 'ГазпромНефть'},
            //         {id: 7, name: 'Роснефть'},
            //       ]
            //     },
            //     {
            //       id: 30,
            //       name: "Яндекс Плюс",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 31,
            //       name: "Билеты на кинопоиске",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 32,
            //       name: "Онлайн кинотеатры",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 33,
            //       name: "Бургер Кинг",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 34,
            //       name: "Оплата телефоном",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 35,
            //       name: "Кафе и рестораны",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //     {
            //       id: 36,
            //       name: "Книги",
            //       img: "package.svg",
            //       noActive: false,
            //       shops: [],
            //     },
            //   ],
            categories: []
        }
    }, 
    mutations: {
      addShopMutation(state, payload) {
        const cat = state.categories.filter(item => {return item.mcc == payload.mcc})
        cat.forEach(category => {
          category.shops.push({id: payload.idStore, name: payload.nameCategory})
        });
        
      },
      removeShopMutation(state, payload) {
        const cat = state.categories.filter(item => {return item.id == payload.idCategory})[0]
        // const shops = cat.shops.filter(item => {return item.id != payload.idShop})
        for(let i = 0; i < cat.shops.length; i++){
          if(cat.shops[i].id == payload.idShop)
            cat.shops.splice(i, 1)
        } 
      },
      addCategory(state, payload) {
        state.categories.push(
          {
            id: payload.id,
            name: payload.name,
            img: "package.svg",
            noActive: false,
            about: payload.about,
            shops: [],
          }
        )

        // Сортируем массив
        state.categories.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      },
      setCategories(state, payload) {
        state.categories = payload
      }
    },
    actions: {
      async fetchCategories({ commit, getters }) {
        // console.log('fetchCategories')
        return new Promise((response, reject) => {
          const url = `${process.env.VUE_APP_API_URL}/api/v1/category`
          const token = getters['auth/token']
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
    
          axios.get( 
            url,
            config
          ).then((responseText) => {
            // console.log(responseText.data)
            commit('setCategories', responseText.data)
            response(responseText)
          })
           .catch((e) => {
              reject(e)
           });
        })
      },
      async addShopAction({ commit, getters }, params) {
        const url = `${process.env.VUE_APP_API_URL}/api/v1/store`
        const token = getters['auth/token']
        const body = {
          "mcc_id": params.mcc,
          "name": params.name,
          "user": 0
        }
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        await axios.post( 
          url,
          body,
          config
        ).then((responseText) => {
          // console.log(responseText)
          commit('addShopMutation', {
           idCategory: params.idCategory,
           nameCategory: responseText.data.name,
           idStore: responseText.data.id,
           mcc: responseText.data.mcc_id,
          })
        })
        .catch(console.log);
      },
      async removeShopAction({ commit, getters }, params) {
        const url = `${process.env.VUE_APP_API_URL}/api/v1/store/${params.idShop}`
        const token = getters['auth/token']
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        await axios.delete( 
          url,
          config
        ).then((responseText) => {
          commit('removeShopMutation', {
            idCategory: params.idCategory,
            idShop: params.idShop
          })
        })
        .catch(console.log);
      },
      async addCategoryAction({ commit, getters }, params) {
        return new Promise((resolve, reject) => {

          const url = `${process.env.VUE_APP_API_URL}/api/v1/category`
          const token = getters['auth/token']
          const body = {
            "name": params.name,
            "about": params.about, 
            "bank": params.bank,
          }
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
  
          axios.post( 
            url,
            body,
            config
          ).then((responseText) => {
            commit('addCategory', responseText.data)
            resolve(responseText)
          })
          .catch((e) => {
            reject(e)
          });

        });

      }
    },
    getters: {
      category: (state) => (id) => {
        return state.categories.find(cat => cat.id === id)
      }
    },
    modules: {
      auth,
      currentBanks,
      selectDate,
      banks
    }
})