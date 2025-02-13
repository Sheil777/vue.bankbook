<template>
  <div class="container _container">
    <the-header></the-header>
    <div align='center' v-if="currentBanks.length === 0">Добавьте новый банк</div>
    <app-bank-container 
      :title="bank.name" 
      :editing="editing" 
      v-for="bank in currentBanks" :key="bank.id" 
      :backgroundColor="bank.backgroundColor" 
      :color="bank.color"
      @openPopup="$refs.popupAddCurrentCategoryRef.open(bank.id)" 
      @delete="$refs.popupDeleteCurrentBankRef.open(bank.id, bank.name)"
    >
      <app-category 
        v-for="category in bank.categories"
        :key="category.id"
        :img="category.img"
        :background-color="category.backgroundColor"
        :editing="editing"
        :no-active="!!category.noActive" 
        @delete='deleteCurrentCategory(bank.id, category.idCC)'
    
        @mousedown.prevent="holdByCategory(category.idCC)"
        @mouseup.prevent="clearTimer(category)"
        @pointerdown.prevent="holdByCategory(category.idCC)"
        @pointerup.prevent="clearTimer(category)"
        @pointerleave.prevent="clearTimer2"
      >{{ category.name }}</app-category>
    </app-bank-container>
    <app-button-edit @toggle-editing="toggleEditing"></app-button-edit>

    <app-popup-add-current-category
      :current-categories="$store.state.categories"
      @add="addCurrentCategory"
      ref="popupAddCurrentCategoryRef"
    ></app-popup-add-current-category>

    <app-popup-delete-current-bank
      @deleteBank="deleteCurrentBank"
      ref="popupDeleteCurrentBankRef"
    ></app-popup-delete-current-bank>

    <app-popup-category-about
      :editing="editing"
      ref="popupCategoryAboutRef" 
    ></app-popup-category-about>
  </div>
</template>

<script>
import axios from 'axios'
import AppBankContainer from "../components/AppBankContainer.vue";
import AppCategory from "../components/AppCategory.vue";
import AppButtonEdit from "../components/AppButtonEdit.vue";
import AppPopupAddCurrentCategory from "@/components/popups/AppPopupAddCurrentCategory.vue";
import AppPopupDeleteCurrentBank from "@/components/popups/AppPopupDeleteCurrentBank.vue";
import AppPopupCategoryAbout from "@/components/popups/AppPopupCategoryAbout.vue";

export default {
  data() {
    return {
      // currentBanks: [
      //   {
      //     id: 2,
      //     name: 'Альфа-Банк',
      //     backgroundColor: 'red',
      //     color: 'white',
      //     categories: [
      //       {
      //         id: 1,
      //         idCC: 101,
      //         name: "10% Книги",
      //         img: "book.svg",
      //         noActive: false,
      //         backgroundColor: "#f5770a",
      //         about: null,
      //       },
      //       {
      //         id: 2,
      //         idCC: 102,
      //         name: "1% Все покупки",
      //         img: "package.svg",
      //         noActive: false,
      //         about: '1% на все покупки за каждые 100 руб.'
      //       },
      //       {
      //         id: 3,
      //         idCC: 103,
      //         name: "5% Транспорт",
      //         img: "train.svg",
      //         noActive: true,
      //       },
      //       {
      //         id: 4,
      //         idCC: 104,
      //         name: "5% Цифровые товары",
      //         img: "package.svg",
      //         noActive: true,
      //       },
      //       {
      //         id: 5,
      //         idCC: 105,
      //         name: "5% Активный отдых",
      //         img: "package.svg",
      //         noActive: true,
      //       },
      //       {
      //         id: 6,
      //         idCC: 106,
      //         name: "5% Красота",
      //         img: "package.svg",
      //         noActive: true,
      //       },

      //     ]
      //   },
      //   {
      //     id: 3,
      //     name: 'ВТБ',
      //     backgroundColor: 'rgb(28, 66, 159)',
      //     color: 'white',
      //     categories: [
      //       {
      //         id: 10,
      //         idCC: 110,
      //         name: "5% Такси",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 11,
      //         idCC: 111,
      //         name: "15% Платные дороги",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 12,
      //         idCC: 112,
      //         name: "8% АЗС",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //     ]
      //   },        
      //   {
      //     id: 4,
      //     name: 'Яндекс',
      //     backgroundColor: 'red',
      //     color: 'white',
      //     categories: [
      //       {
      //         id: 30,
      //         idCC: 130,
      //         name: "40% Яндекс Плюс",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 31,
      //         idCC: 131,
      //         name: "25% Билеты на кинопоиске",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 32,
      //         idCC: 132,
      //         name: "100% Онлайн кинотеатры",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 33,
      //         idCC: 133,
      //         name: "15% Бургер Кинг",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 34,
      //         idCC: 134,
      //         name: "1% Оплата телефоном",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 35,
      //         idCC: 135,
      //         name: "5% Кафе и рестораны",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //       {
      //         id: 36,
      //         idCC: 136,
      //         name: "20% Книги",
      //         img: "package.svg",
      //         noActive: false,
      //       },
      //     ]
      //   }
      // ],
      currentBanks: [],
      editing: false,
      timer: null,
      timerFlag: false,
    }
  },
  methods: {
    holdByCategory(categoryId) {
      this.timerFlag = false

      this.timer = setTimeout(_ => {
        this.toggleNoActive(categoryId)
        this.timerFlag = true
      }, 800)      
    },
    clearTimer(category) {
      if(!this.timerFlag)
        this.$refs.popupCategoryAboutRef.open(category) // Открываем попап

      clearTimeout(this.timer)  
    },
    clearTimer2() {
      clearTimeout(this.timer)  
    },
    toggleNoActive(categoryId) {
      this.currentBanks.forEach(banks => {
        let categories = banks.categories
        let cat = categories.filter(category => {return category.idCC === categoryId})
        if(cat.length != 0)
          cat[0].noActive = !cat[0].noActive
      });
    },
    toggleEditing() {
      this.editing = !this.editing
    },
    deleteCurrentCategory(bankId, categoryId) {
      const cat = this.currentBanks.filter(i => { return i.id === bankId })[0].categories    // Получаем все категории банка
      const newArr = cat.filter(item => { return item.idCC !== categoryId; })                // Удаляем лишнюю категорию
      this.currentBanks.filter(i => { return i.id === bankId })[0].categories = newArr       // Перезаписываем
    },
    addCurrentCategory(category, bankId) {
      const cats = this.currentBanks.filter(i => { return i.id === bankId })[0].categories    // Получаем все категории банка
      let newCat = {}
      Object.assign(newCat, category)
      newCat.noActive = false
      newCat.idCC = Math.random() * (1000 - 1) + 1;             // Случайное число для категории
      cats.push(newCat)
    },
    deleteCurrentBank(bankId) {
      const banks = this.currentBanks.filter(bank => { return bank.id !== bankId })
      this.currentBanks = banks

      this.$refs.popupDeleteCurrentBankRef.close()
    },
    getCurrentCategories() {
      const url = `${process.env.VUE_APP_API_URL}/api/v1/currentCategory`

      const token = this.$store.getters['auth/token']

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      axios.get( 
        url,
        config
      ).then((responseText) => {
        // console.log(responseText)
        this.currentBanks = responseText.data
      })
       .catch(console.log);
    },
  },
  mounted() {
    this.getCurrentCategories()
  },
  components: {
    AppBankContainer, 
    AppCategory, 
    AppButtonEdit,
    AppPopupAddCurrentCategory,
    AppPopupDeleteCurrentBank,
    AppPopupCategoryAbout,
  },
}

</script>