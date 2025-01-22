<template>
    <div class="container__bank">
        <div class="bank__header" :style="{ backgroundColor: backgroundColor, color: color }">
            <span>{{ title }}</span>
            <div 
                class="bank__delete" 
                :class="{'visible': editing}" 
                @click="this.$emit('delete')"
            >
                <img src="../assets/img/icons/delete.svg">
            </div>
        </div>
        <div class="bank__categories">
            <slot />
        </div>
        <div
            class="bank__add-category add-category" 
            :class="{'visible': editing}" 
            href="#popup-categories" 
            @click="this.$emit('openPopup')"
        >
            <div class="add-category__icon">
                <img src="../assets/img/icons/plus.svg" alt="">
            </div>
            <div class="add-category__text">Добавить</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        editing: {
            type: Boolean,
            required: false,
            default: false,
        },
        backgroundColor: {
            type: String,
        },
        color: {
            type: String,
        }
    },
    components: {  },
    methods: {
        async() {
            // // Создаём новый объект XMLHttpRequest
            // var xhr = new XMLHttpRequest();

            // // Настраиваем запрос: метод GET, адрес URL
            // xhr.open('GET', '../assets/async.php', true); 

            // // Определяем функцию, которая будет вызвана при получении ответа
            // xhr.onload = function () {
            // if (xhr.status >= 200 && xhr.status < 300) {
            //     // Заказ успешно получен, выводим список материалов
            //     console.log('Список материалов:', xhr.responseText);
            // } else {
            //     // Произошла ошибка при получении заказа
            //     console.error('Ошибка загрузки:', xhr.statusText);
            // }
            // };

            // // Отправляем запрос
            // xhr.send();
        },
    },
    emits: ['openPopup', 'delete']
}

</script>

<style lang="scss" scoped>
    // Нужно ещё убрать выделение плюсика в добавлении категории 

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