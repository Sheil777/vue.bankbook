<template>
  <div class="container _container">
    <app-header></app-header>
    <app-bank-container :editing="editing">
      <app-category img="book.svg">10% Книги</app-category>
      <app-category img="package.svg" noActive>1% Все покупки</app-category>
      <app-category img="train.svg" noActive>5% Транспорт</app-category>
      <app-category img="package.svg" noActive>5% Цифровые товары</app-category>
      <app-category img="package.svg" noActive>5% Активный отдых</app-category>
      <app-category img="package.svg" noActive>5% Красота</app-category>
    </app-bank-container>
    <app-button-edit @toggleEditing="toggleEditing"></app-button-edit>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppBankContainer from "../components/AppBankContainer.vue";
import AppCategory from "../components/AppCategory.vue";
import AppButtonEdit from "../components/AppButtonEdit.vue";

export default {
  data() {
    return {
      editing: false,
    }
  },
  components: {
    AppHeader, 
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