<template>
    <div class="container _container">
        <the-header></the-header>
        <div class="bank__header" style="background-color: #5382c4; color: white;">Категории</div>
        <div class="categories">
            <app-category
                v-for="category in $store.state.currentCategories" :key="category.id"
                :img="category.img"
                :background-color="category.backgroundColor"
                @click="$refs.popupCategoryAboutRef.open()"
            >{{ category.name }}</app-category>
        </div>
        <app-popup-category-about
            ref="popupCategoryAboutRef"
        ></app-popup-category-about>
    </div>
</template>

<script>
import AppCategory from '@/components/AppCategory.vue';
import AppPopupCategoryAbout from '@/components/popups/AppPopupCategoryAbout.vue';

export default {
    components: {AppCategory,AppPopupCategoryAbout}

}


</script>
<style lang="scss">
/*
    $popup-add-current-bank-color: #4f92e0;
    .categories {
        &__item {
            display: flex;
            justify-content: left;
            align-items: center;
            height: 50px;
            font-size: 20px;
            border-bottom: 1px solid black;
            transition: background-color 0.2s;

            &.noActive {
                background-color: rgb(194, 194, 194); 
            }

            &:hover {
                cursor: pointer;
                background-color: #c3ddff;
            }
        }
    }

    .bank__header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        position: relative;
    }

    .add-store {
        margin-top: 4px;
        display: none;

        &.active {
            display: flex;
        }

        &__input {
            font-size: 20px;
            // border: 2px solid $popup-add-current-bank-color;
            border-bottom: 2px solid $popup-add-current-bank-color;
            // border-radius: 5px;
            height: 30px;
            max-width: 235px;
            padding-left: 4px;
            outline: none;
        }

        &__submit {
            display: flex;
            border: 2px solid $popup-add-current-bank-color;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            margin-left: 10px;
            color: $popup-add-current-bank-color;
            font-weight: 500;
            font-size: 16px;
        }
    }
        */
</style>