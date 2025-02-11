import { createStore, createLogger } from "vuex"
import auth from "./modules/auth.module"
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
            categories: [
                {
                  id: 1,
                  name: "10% Книги",
                  img: "book.svg",
                  backgroundColor: "#f5770a",
                  about: null,
                  shops: [
                    {
                      id: 1,
                      name: 'Читай город',
                    },
                  ]
                },
                {
                  id: 2,
                  name: "1% Все покупки",
                  img: "package.svg",
                  backgroundColor: 'rgb(108, 32, 183)',
                  about: '1% на все покупки за каждые 100 руб.',
                  shops: [],
                },
                {
                  id: 3,
                  name: "5% Транспорт",
                  img: "train.svg",
                  backgroundColor: null,
                  about: null,
                  shops: [],
                },
                {
                  id: 4,
                  name: "5% Цифровые товары",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                  shops: [],
                },
                {
                  id: 5,
                  name: "5% Активный отдых",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                  shops: [],
                },
                {
                  id: 6,
                  name: "5% Красота",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                  shops: [],
                },
                {
                  id: 7,
                  name: "15% Заправки",
                  img: "fuel.svg",
                  backgroundColor: '#42aaff',
                  about: null,
                  shops: [
                    {id: 2, name: 'Лукойл'},
                    {id: 3, name: 'ГазпромНефть'},
                    {id: 4, name: 'Роснефть'},
                  ]
                },
                {
                  id: 10,
                  name: "5% Такси",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 11,
                  name: "15% Платные дороги",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 12,
                  name: "8% АЗС",
                  img: "package.svg",
                  noActive: false,
                  shops: [
                    {id: 5, name: 'Лукойл'},
                    {id: 6, name: 'ГазпромНефть'},
                    {id: 7, name: 'Роснефть'},
                  ]
                },
                {
                  id: 30,
                  name: "40% Яндекс Плюс",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 31,
                  name: "25% Билеты на кинопоиске",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 32,
                  name: "100% Онлайн кинотеатры",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 33,
                  name: "15% Бургер Кинг",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 34,
                  name: "1% Оплата телефоном",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 35,
                  name: "5% Кафе и рестораны",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
                {
                  id: 36,
                  name: "20% Книги",
                  img: "package.svg",
                  noActive: false,
                  shops: [],
                },
              ],
        }
    }, 
    mutations: {
      addShop(state, payload) {
        const cat = state.categories.filter(item => {return item.id == payload.idCategory})[0]
        cat.shops.push({id: Math.random() * (1000 - 1) + 1, name: payload.nameCategory})
      },
      removeShop(state, payload) {
        const cat = state.categories.filter(item => {return item.id == payload.idCategory})[0]
        // const shops = cat.shops.filter(item => {return item.id != payload.idShop})
        for(let i = 0; i < cat.shops.length; i++){
          if(cat.shops[i].id == payload.idShop)
            cat.shops.splice(i, 1)
        }
        
        // cat.shops = shops

        // console.log(state.categories.filter(item => {return item.id == payload.idCategory})[0])
      },
      addCategory(state, payload) {
        state.categories.push(
          {
            id: Math.random() * (1000 - 1) + 1,
            name: payload.nameCategory,
            img: "package.svg",
            noActive: false,
            about: payload.about,
            shops: [],
          }
        )
      },
      setCategories(state, payload) {
        state.categories = payload
        // console.log(state.categories)
      }
    },
    actions: {
      async fetchCategories({ commit, getters }) {
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
        })
         .catch(console.log);
      }
    },
    modules: {
      auth
    }
})