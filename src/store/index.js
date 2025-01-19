import { createStore } from "vuex"

export default createStore({
    state() {
        return {
            currentCategories: [
                {
                  id: 1,
                  name: "10% Книги",
                  img: "book.svg",
                  backgroundColor: "#f5770a",
                  about: null,
                },
                {
                  id: 2,
                  name: "1% Все покупки",
                  img: "package.svg",
                  backgroundColor: 'rgb(108, 32, 183)',
                  about: '1% на все покупки за каждые 100 руб.'
                },
                {
                  id: 3,
                  name: "5% Транспорт",
                  img: "train.svg",
                  backgroundColor: null,
                  about: null,
                },
                {
                  id: 4,
                  name: "5% Цифровые товары",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                },
                {
                  id: 5,
                  name: "5% Активный отдых",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                },
                {
                  id: 6,
                  name: "5% Красота",
                  img: "package.svg",
                  backgroundColor: null,
                  about: null,
                },
                {
                  id: 7,
                  name: "15% Заправки",
                  img: "fuel.svg",
                  backgroundColor: '#42aaff',
                  about: null,
                },
              ],
        }
    }
})