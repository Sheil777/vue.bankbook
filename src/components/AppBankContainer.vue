<template>
    <div class="container__bank">
        <div id_b="2" class="bank__header" style="background-color: red; color: white;">
            <span>Альфа-Банк</span>
            <div class="bank__delete popup-link visible" href="#popup-delete-current-bank">
                <img src="../assets/img/icons/delete.svg">
            </div>
        </div>
        <div class="bank__categories">
            <app-category img="book.svg">10% Книги</app-category>
            <app-category img="package.svg" noActive>1% Все покупки</app-category>
            <app-category img="train.svg" noActive>5% Транспорт</app-category>
            <app-category img="package.svg" noActive>5% Цифровые товары</app-category>
            <app-category img="package.svg" noActive>5% Активный отдых</app-category>
            <app-category img="package.svg" noActive>5% Красота</app-category>
        </div>
        <div id_b="2" class="bank__add-category add-category popup-link visible" href="#popup-categories">
            <div class="add-category__icon">
                <img src="../assets/img/icons/plus.svg" alt="">
            </div>
            <div class="add-category__text">Добавить</div>
        </div>
    </div>
</template>

<script>
import AppCategory from "./AppCategory.vue";

export default {
    components: { AppCategory },
}

</script>

<style lang="scss">
    .bank {
        &__header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            font-size: 20px;
            font-weight: 600;
            position: relative;
        }

        &__delete {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            right: 14px;
            background-color: white;
            padding: 5px;
            border-radius: 6px;
            transition: opacity 0.5s;
    
            img {
                height: 22px;
            }
    
            &.visible {
                visibility: visible;
                opacity: 1;
            }
        }
    }
</style>