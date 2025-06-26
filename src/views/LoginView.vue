<template>
    <div class="container _container">
        <the-header></the-header>

        <form @submit.prevent="onSubmit">
            <div class="login" :class="{invalid: loginError}">
                <input id='form-login' type="text" placeholder="Введите логин" v-model="loginValue" @blur="loginBlur">
                <small v-if="loginError">{{ loginError }}</small>
            </div>
            <div class="password" :class="{invalid: passError}">
                <input id='password' :type="showPassword ? 'text' : 'password'" placeholder="Пароль" v-model="passValue" @blur="emailBlur">
                <small  v-if="passError">{{ passError }}</small>
                <img src="../assets/img/icons/eye-close.svg" alt="Показать пароль" v-show="!showPassword" @click="showPassword = !showPassword">
                <img src="../assets/img/icons/eye.svg" alt="Cкрыть пароль" v-show="showPassword" @click="showPassword = !showPassword">
            </div>
            <div class="report" v-if="errorAuth">
                {{ errorAuth }}
            </div>
            <button :class="{disabled: isSubmitting || loginError || passError}">Войти</button>
        </form>

        <div class="button-register">
            <router-link to="/registration">
                <a>Зарегистрироваться</a>
            </router-link>
        </div>
    </div>
</template>

<script>
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        let errorAuth = ref(null) // Ошибки при авторизации
        let showPassword = ref(false) // Показать пароль
        const store = useStore()
        const router = useRouter()
        const {handleSubmit, isSubmitting} = useForm()
        
        const {value: loginValue, errorMessage: loginError, handleBlur: loginBlur} = useField(
            'login',
            yup.string().trim().required('Пожалуйста введите логин')
        )

        const {value: passValue, errorMessage: passError, handleBlur: passBlur} = useField(
            'password',
            yup.string().trim().required('Пожалуйста введите пароль')
        )

        const onSubmit = handleSubmit( async values => {
            // console.log(values)
            try {
                await store.dispatch('auth/login', values)
                router.push('/')
            } catch (error) {
                errorAuth.value = error
            }
        })

        return {
            loginValue,
            passValue,
            loginError,
            passError,
            loginBlur,
            passBlur,
            onSubmit,
            isSubmitting,
            errorAuth,
            showPassword
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/authorization';


._container {
    max-width: 393px;
    margin: 0px auto;
    padding: 0 15px;
    box-sizing: content-box; /* Сам прибавляет padding */
}

@media (min-width: 393px) {
    ._container {
        padding: 0;
    }
}


form {
    width: 250px;
    margin: 0 auto;
}

.login {
    margin-top: 100px;

    input {
        display: block;
        height: 30px;
        // width: 240px;
        width: 100%;
        margin: 0 auto;
        color: #43679b;
        font-size: 20px;
        border-bottom: 1px solid #334c72;
        text-align: center;

        &:focus {
            outline: none;
            content: "";
        }
    }

    input::-webkit-input-placeholder       {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input::-moz-placeholder                {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:-moz-placeholder                 {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:-ms-input-placeholder            {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:focus::-webkit-input-placeholder {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus::-moz-placeholder          {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus:-moz-placeholder           {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus:-ms-input-placeholder      {text-indent: 500px; transition: text-indent 0.3s ease;}

    &.invalid input {
        border-bottom: 1px solid red;
    }
}

.password {
    position: relative;
    margin-top: 30px;

    input {
        display: block;
        height: 30px;
        // width: 240px;
        width: 100%;
        margin: 0 auto;
        color: #43679b;
        font-size: 20px;
        border-bottom: 1px solid #334c72;
        text-align: center;

        &:focus {
            outline: none;
            content: "";
        }

        padding: 0 40px;
        box-sizing: border-box;
    }

    input::-webkit-input-placeholder       {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input::-moz-placeholder                {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:-moz-placeholder                 {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:-ms-input-placeholder            {text-indent: 0px;   transition: text-indent 0.3s ease;}
    input:focus::-webkit-input-placeholder {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus::-moz-placeholder          {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus:-moz-placeholder           {text-indent: 500px; transition: text-indent 0.3s ease;}
    input:focus:-ms-input-placeholder      {text-indent: 500px; transition: text-indent 0.3s ease;}
    input[type="password"]::-ms-reveal {
        display: none;
    }

    img {
        position: absolute;
        top: 0;
        right: 5px;
        width: 30px;
        cursor: pointer;
    }
}

form button {
    background-color: #649eed;
    height: 40px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
  
    margin-top: 40px;

    font-size: 20px;
    font-family: inherit;
    color: white;
  
    transition: background-color 0.3s;
  
    &:hover {
      background-color: #5382c4;
      cursor: pointer;
    }

    &.disabled {
        background-color: #e7e7e7;
        color: #707070;
        cursor: default;
    }
}

.button-register {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 100%;

    a {
        display: block;
        width: 100%;
        text-align: center;
        color: #649eed;
    }

    @media (max-height: 480px) {
        position: unset;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.report {
    text-align: center;
    color: red;
    margin-top: 30px;
    margin-bottom: -10px;
}




</style>
  