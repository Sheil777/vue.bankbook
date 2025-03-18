<template>
    <div class="container _container">
        <the-header></the-header>
        <h1>Добавление новой категории</h1>

<div class="ncat__main">
    <form action="" method="POST" @submit.prevent="submit">
        <div class="ncat__name text-field text-field_floating-2">
            <input class="text-field__input" type="input" id="name" name="name" placeholder="Все категории" required v-model="nameCategory">
            <label class="text-field__label" for="name">Наименование</label>
        </div>
        

        <div class="ncat__about_wrap">
            <textarea class="ncat__about" name="about" id="about" rows="4" placeholder="Описание" v-model="about"></textarea>
        </div>

        <div class="ncat__bank">
            <select name="bank" id="bank" v-model="bank">
                <option value="0" selected>Любой банк</option>
                <option v-for="bank in banksList" :key="bank.id" :value='bank.id'>{{ bank.name }}</option>
            </select>
        </div>

        <input id="ncat__submit" class="button__submit" type="submit" :disabled="buttonDisabled">
    </form>

    <div class="ncat__report" :class="{'active': report}">
        <p>{{ reportMessage }}</p>
    </div>
</div>
    </div>
</template>

<script>
import axios from 'axios'
import {error} from '../utils/error'

export default {
    data() {
        return {
            nameCategory: '',
            about: '',
            bank: 0,
            buttonDisabled: false,
            report: false,
            reportMessage: '',
            banksList: null
        }
    },
    methods: {
        showReport(message) {
            this.report = true
            this.reportMessage = message

        },
        clearFields(){
            this.nameCategory = '',
            this.about = '',
            this.bank = 0
        },
        submit() {
            this.buttonDisabled = true

            this.$store.dispatch('addCategoryAction', {
                name: this.nameCategory, 
                about: this.about,
                bank: this.bank,
            }).then((responseText)=> {
                console.log(responseText)
                this.showReport('Категория успешно добавлена')
                this.clearFields()

                this.buttonDisabled = false
            }).catch((e) => {
                if(Object.hasOwn(e, 'response')){
                    this.showReport(error(e.response.data.error))
                }else{
                    this.showReport('Произошла ошибка при добавлении категории')
                }

                this.buttonDisabled = false
            })
        }
    },
    created() {
        const token = this.$store.getters['auth/token']

        axios.get( 
            `${process.env.VUE_APP_API_URL}/api/v1/banks`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((responseText) => {
            this.banksList = responseText.data
        })
        .catch((e) => {
            console.log(e)
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/unit';

.ncat__main {
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

    &:disabled {
        background-color: #e7e7e7;
        color: #707070;
        cursor: default;
    }
}

select {
    cursor: pointer;
}

.button__submit {
    &:hover {
        cursor: pointer;
    }
}

.text-field {
    &__input {
        width: 100%;
    }
}

.ncat {
    &__name {
        max-width: 300px;
    }

    &__percent {
        input {
            width: 60px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }

    &__about {
        font-family: 'Montserrat';
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        width: 100%;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
        color: #212529;
        min-height: 80px;
        resize: vertical; 

        &::placeholder {
            // font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 400;
            color: #757575;
        }

        &:focus {
            border-color: #5382c4;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(71, 137, 230, 0.25);
        }

        &_wrap {
            max-width: 300px;
        }
    }

    &__bank {
        select {
            width: 300px;
            font-family: 'Montserrat';
            color: #212529;
            margin-top: 1rem;
            font-size: 16px;
            
            &:focus {
                border-color: #5382c4;
                outline: 0;
                box-shadow: 0 0 0 0.2rem rgba(71, 137, 230, 0.25);
            }
        }
    }

    &__report {
        margin-top: 30px;
        overflow: hidden;

        p {
            transform: translateY(100%);
            transition: transform 0.5s;
        }

        &.active {
            p {
                transform: translateY(0);
            }

        }
    }
}
</style>