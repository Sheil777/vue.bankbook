<template>
    <div class="container _container">
        <the-header></the-header>
        <h1>Добавление новой категории</h1>

<div class="ncat__main">
    <form action="" method="POST">
        <div class="ncat__line">
            <div class="ncat__percent text-field text-field_floating-2">
                <input class="text-field__input" type="number" min=0 max=100 id="percent" name="percent" placeholder="5" required v-model="percent">
                <label class="text-field__label" for="percent">%</label>
            </div>

            <div class="ncat__name text-field text-field_floating-2">
                <input class="text-field__input" type="input" id="name" name="name" placeholder="Все категории" required v-model="nameCategory">
                <label class="text-field__label" for="name">Наименование</label>
            </div>
        </div>

        <div class="ncat__about_wrap">
            <textarea class="ncat__about" name="about" id="about" rows="4" placeholder="Описание" v-model="about"></textarea>
        </div>

        <div class="ncat__bank">
            <select name="bank" id="bank" v-model="bank">
                <option value="0" selected>Любой банк</option>
                <option value='1'>Тинькофф</option>
            </select>
        </div>

        <input id="ncat__submit" class="button__submit" type="submit" @click.prevent="submit">
    </form>

    <div class="ncat__report">
        <p>Категория успешно добавлена</p>
    </div>
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: '',
            nameCategory: '',
            about: '',
            bank: 0,
        }
    },
    methods: {
        submit() {
            console.log('percent', this.percent)
            console.log('name', this.nameCategory)
            console.log('about', this.about)
            console.log('bank', this.bank)
            this.$store.commit('addCategory', {
                nameCategory: this.percent + '% ' + this.nameCategory,
                about: this.about,
            })
        }
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
    &__line {
        max-width: 300px;
        display: flex;
        justify-content: space-between;
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