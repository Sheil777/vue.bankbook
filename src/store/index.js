import { createStore } from "vuex"

export default createStore({
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
                    'Читай город',
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
                  shops: ['Лукойл', 'ГазпромНефть', 'Роснефть']
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
                  shops: ['Лукойл', 'ГазпромНефть', 'Роснефть'],
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
      addStore(state, payload) {
        const cat = state.categories.filter(item => {return item.id == payload.idCategory})[0]

        if(cat.shops){
          console.log('da')
          cat.shops.push(payload.nameCategory)
        }else{
          console.log('net')
          
        }
      }
    }
})