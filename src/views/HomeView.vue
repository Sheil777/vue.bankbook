<template>
  <div class="container _container">
    <the-header></the-header>
    <app-bank-container :title="bank.name" :editing="editing" v-for="bank in currentBanks" :key="bank.id" :backgroundColor="bank.backgroundColor" :color="bank.color">
      <app-category 
        v-for="category in bank.categories"
        :key="category.id"
        :img="category.img"
        :editing="editing"
        :no-active="category.noActive"
      >{{ category.name }}</app-category>
    </app-bank-container>
    <app-button-edit @toggle-editing="toggleEditing"></app-button-edit>
  </div>
</template>

<script>
import AppBankContainer from "../components/AppBankContainer.vue";
import AppCategory from "../components/AppCategory.vue";
import AppButtonEdit from "../components/AppButtonEdit.vue";

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
      editing: false,
    }
  },
  components: {
    AppBankContainer, 
    AppCategory, 
    AppButtonEdit
  },
  methods: {
    toggleEditing() {
      this.editing = !this.editing
    }
  }
}

</script>

<style>
</style>