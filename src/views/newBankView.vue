<template>
    <div class="container _container">
      <the-header></the-header>
      <h1>Добавление нового банка</h1>

        <div class="main">
            <form @submit.prevent="submit">
                <div class="text-field text-field_floating-2">
                    <input class="text-field__input" type="input" id="name" name="name" placeholder="Тинькофф" v-model.trim="name" required>
                    <label class="text-field__label" for="name">Наименование</label>
                </div>

                <select name="color-bg" id="color-bg" v-model.trim="background" required>
                    <option value="" selected="true" disabled="disabled">Цвет фона</option>
                    <option value="white">Белый</option>
                    <option value="yellow">Жёлтый</option>
                    <option value="red">Красный</option>
                    <option value="blue">Синий</option>
                    <option value="green">Зелёный</option>
                </select>

                <select name="color-text" id="color-text" v-model.trim="color" required>
                    <option value="" selected="true" disabled="disabled">Цвет текста</option>
                    <option value="white">Белый</option>
                    <option value="yellow">Жёлтый</option>
                    <option value="red">Красный</option>
                    <option value="blue">Синий</option>
                    <option value="black">Чёрный</option>
                </select>

                <input class="button__submit" type="submit" :disabled="!name || !background || !color">
            </form>
            <div class="report" v-if="report">{{ report }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            background: '',
            color: '',
            report: '',
        }
    },
    methods: {
        async submit() {
            this.report = ''
            const url = `${process.env.VUE_APP_API_URL}/api/v1/banks`
            const body = {
                "name": this.name,
                "color_bg": this.background,
                "color_text": this.color
            }
            const token = this.$store.getters['auth/token']
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.post(url, body, config)
                .then((responseText) => {
                    this.report = "Банк успешно добавлен"
                    this.name = ''
                    this.background = ''
                    this.color = ''
                }).catch((response) => {
                    if(response.status == 422) {
                        this.report = "Банк уже существует"
                    }else{
                        this.report = "Произошла неизвестная ошибка"
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';


// unit

/* Выключить hover */
._no-hover {
    &:hover {
        background-color: unset !important;
        color: unset !important;
        cursor: unset !important;
    }
}


/* Кнопка */
._button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    a {
        padding: 4px;
        box-sizing: border-box;
        min-width: 130px;
        min-height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid $popup-add-current-bank-color;
        border-radius: 8px;
        color: $popup-add-current-bank-color;
        font-weight: 600;
    }
}

/* Шапка сайта */
header {
    width: 100%;
    padding: 10px 0;

    img {
        display: block;
        margin: 0 auto;
        width: 80%;
    }
}

/* Категория (вид на главной странице) */
.category {
    &__logo {
        width: 60px;
        text-align: center;
        img {
            padding: 3px;
            box-sizing: border-box;
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }

    &__delete {
        margin-left: auto;
        margin-right: 20px;

        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s;
    
        &.visible {
            visibility: visible;
            opacity: 1;
        }

        img {
            height: 22px;
        }
    }

    &__edit {
        padding-right: 20px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s;
    
        &.visible {
            visibility: visible;
            opacity: 1;
        }
    
        img {
            height: 22px;
        }
        
    }
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    background-color: #5382c4; 
    color: white;
}

.unit__item {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: white;
    font-size: 20px;
    border-bottom: 1px solid black;
    color: black;
}

/* Красивый блок Input */
/* text field */
.text-field {
    margin-bottom: 1rem;

    &__label {
        display: block;
        margin-bottom: 0.25rem;
    }

    &__input {
        display: block;
        width: 70%;
        padding: 0.375rem 0.75rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-sizing: border-box;
    }
}

.text-field__input[type="search"]::-webkit-search-decoration,
.text-field__input[type="search"]::-webkit-search-cancel-button,
.text-field__input[type="search"]::-webkit-search-results-button,
.text-field__input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
}

.text-field__input::placeholder {
    color: #212529;
    opacity: 0.4;
}

.text-field__input:focus {
    color: #212529;
    background-color: #fff;
    // border-color: #bdbdbd;
    border-color: #5382c4;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(71, 137, 230, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
    background-color: #f5f5f5;
    opacity: 1;
}

/* with floating label */
.text-field_floating-2 {
    position: relative;

    & .text-field__input {
        // height: calc(1.75rem + 2px);
        padding: 0.5rem 0.75rem;
    }

    & .text-field__label {
        position: absolute;
        top: 50%;
        left: 0.3125rem;
        display: flex;
        transform: translateY(-50%);
        pointer-events: none;
        border: none;
        background-color: #fff;
        color: #757575;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        transition: top 0.1s ease-in-out, scale 0.1s ease-in-out;
    }

    & .text-field__input::-moz-placeholder {
        color: transparent;
    }

    & .text-field__input::placeholder {
        color: transparent;
    }
}

.text-field_floating-2 .text-field__input:focus~.text-field__label,
.text-field_floating-2 .text-field__input:not(:placeholder-shown)~.text-field__label {
    top: 0;
    transform: translateY(-50%) scale(0.75);
    color: #5382c4;
}

/* Общее */
.text-field__input, select {
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: 40px;
    width: 70%;
    padding: 0.375rem 0.75rem;
}
/* Общее */
/* Красивый блок Input */


// unit

.main {
    padding: 20px;
}

#color-text {
    margin-top: 15px;
}

.button__submit {
    display: block;
    width: 180px;
    height: 40px;
    font-size: 15px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #5382c4;
    color: white;
}

select {
    cursor: pointer;
}

.button__submit {
    &:hover {
        cursor: pointer;
    }
    
    &[disabled] {
        background-color: #e7e7e7;
        color: #707070;
        cursor: default;
    }
}

.report {
    margin-top: 10px;    
}
</style>