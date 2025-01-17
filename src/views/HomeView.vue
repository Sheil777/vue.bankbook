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
      @openPopup="openPopupAddCurrentCategoryMethod(bank.id)" 
      @delete-bank="openPopupDeleteCurrentBankMethod(bank.id)"
    >
      <app-category 
        v-for="category in bank.categories"
        :key="category.id"
        :img="category.img"
        :editing="editing"
        :no-active="category.noActive" 
        @delete='deleteCurrentCategory(bank.id, category.id)'
        @mousedown.prevent="holdByCategory(category.id)"
        @mouseup.prevent="clearTimer"
        @pointerdown.prevent="holdByCategory(category.id)"
        @pointerup.prevent="clearTimer"
        @pointerleave.prevent="clearTimer2"
      >{{ category.name }}</app-category>
    </app-bank-container>
    <app-button-edit @toggle-editing="toggleEditing"></app-button-edit>
    <app-popup-add-current-category 
      :open-popup-add-current-category="openPopupAddCurrentCategory"
      @close-popup="closePopupAddCurrentCategoryMethod"
      :current-categories="currentCategories"
      @add="addCurrentCategory"
    ></app-popup-add-current-category>
    <app-popup-delete-current-bank
      :open-popup-delete-current-bank="openPopupDeleteCurrentBank"
      @closePopup="closePopupDeleteCurrentBankMethod"
      @deleteBank="deleteCurrentBank"
      :bankName="bankName"
    ></app-popup-delete-current-bank>
    <app-popup-category-about
      :open="openPopupCategoryAbout"
      @close="closePopupCategoryAboutMethod"
    ></app-popup-category-about>
  </div>
</template>

<script>
import AppBankContainer from "../components/AppBankContainer.vue";
import AppCategory from "../components/AppCategory.vue";
import AppButtonEdit from "../components/AppButtonEdit.vue";
import AppPopupAddCurrentCategory from "@/components/popups/AppPopupAddCurrentCategory.vue";
import AppPopupDeleteCurrentBank from "@/components/popups/AppPopupDeleteCurrentBank.vue";
import AppPopupCategoryAbout from "@/components/popups/AppPopupCategoryAbout.vue";

export default {
  data() {
    return {
      currentBanks: [
        {
          id: 2,
          name: 'Альфа-Банк',
          backgroundColor: 'red',
          color: 'white',
          categories: [
            {
              id: 1,
              name: "10% Книги",
              img: "book.svg",
              noActive: false,
            },
            {
              id: 2,
              name: "1% Все покупки",
              img: "package.svg",
              noActive: false,
            },
            {
              id: 3,
              name: "5% Транспорт",
              img: "train.svg",
              noActive: true,
            },
            {
              id: 4,
              name: "5% Цифровые товары",
              img: "package.svg",
              noActive: true,
            },
            {
              id: 5,
              name: "5% Активный отдых",
              img: "package.svg",
              noActive: true,
            },
            {
              id: 6,
              name: "5% Красота",
              img: "package.svg",
              noActive: true,
            },

          ]
        },
        {
          id: 3,
          name: 'ВТБ',
          backgroundColor: 'rgb(28, 66, 159)',
          color: 'white',
          categories: [
            {
              id: 10,
              name: "5% Такси",
              img: "",
              noActive: false,
            },
            {
              id: 11,
              name: "15% Платные дороги",
              img: "package.svg",
              noActive: false,
            },
            {
              id: 12,
              name: "8 АЗС",
              img: "package.svg",
              noActive: false,
            },
            

          ]
        }
      ],
      currentCategories: [
        {
          id: 1,
          name: "10% Книги",
          img: "book.svg",
        },
        {
          id: 2,
          name: "1% Все покупки",
          img: "package.svg",
        },
        {
          id: 3,
          name: "5% Транспорт",
          img: "train.svg",
        },
        {
          id: 4,
          name: "5% Цифровые товары",
          img: "package.svg",
        },
        {
          id: 5,
          name: "5% Активный отдых",
          img: "package.svg",
        },
        {
          id: 6,
          name: "5% Красота",
          img: "package.svg",
        },
      ],
      editing: false,
      openPopupAddCurrentCategory: false,
      openPopupDeleteCurrentBank: false,
      openPopupCategoryAbout: false,
      idBank: null,
      bankName: null,
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
    clearTimer() {
      if(!this.timerFlag)
        this.openPopupCategoryAboutMethod()

      clearTimeout(this.timer)  
    },
    clearTimer2() {
      clearTimeout(this.timer)  
    },
    toggleNoActive(categoryId) {
      this.currentBanks.forEach(banks => {
        let categories = banks.categories
        let cat = categories.filter(category => {return category.id === categoryId})
        if(cat.length != 0)
          cat[0].noActive = !cat[0].noActive
      });
    },
    toggleEditing() {
      this.editing = !this.editing
    },
    openPopupAddCurrentCategoryMethod(bankId) {
      this.idBank = bankId
      this.openPopupAddCurrentCategory = true
    },
    openPopupDeleteCurrentBankMethod(bankId) {
      let bankName = this.currentBanks.filter(i => { return i.id === bankId})
      this.bankName = bankName[0].name
      this.idBank = bankId
      this.openPopupDeleteCurrentBank = true
    },
    openPopupCategoryAboutMethod() {
      if(!this.editing)
        this.openPopupCategoryAbout = true
    },
    closePopupCategoryAboutMethod() {
      this.openPopupCategoryAbout = false
    },
    closePopupAddCurrentCategoryMethod() {
      this.openPopupAddCurrentCategory = false
    },
    closePopupDeleteCurrentBankMethod() {
      this.openPopupDeleteCurrentBank = false
    },
    deleteCurrentCategory(bankId, categoryId) {
      const cat = this.currentBanks.filter(i => { return i.id === bankId })[0].categories  // Получаем все категории банка
      const newArr = cat.filter(item => { return item.id !== categoryId; })                // Удаляем лишнюю категорию
      this.currentBanks.filter(i => { return i.id === bankId })[0].categories = newArr     // Перезаписываем
    },
    addCurrentCategory(category) {
      const cat = this.currentBanks.filter(i => { return i.id === this.idBank })[0].categories  // Получаем все категории банка
      // console.log(this.idBank)
      // console.log(category)
      category.noActive = false
      cat.push(category)
      // console.log(cat)
    },
    deleteCurrentBank() {
      const banks = this.currentBanks.filter(bank => { return bank.id !== this.idBank })
      this.currentBanks = banks

      this.closePopupDeleteCurrentBankMethod()
    }
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

<style>
</style>