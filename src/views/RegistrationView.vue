<template>
  <div class="container _container-registration">
      <the-header></the-header>
      <form action="#" @submit.prevent="submit">
          <div class="login" :class="{'invalid': errors.login}">
              <input id="form-login" type="text" placeholder="Введите логин" v-model.trim="login" required>
              <small v-if="errors.login">{{ errors.login }}</small>
          </div>
          <div class="email" :class="{'invalid': errors.email}">
              <input id="form-email" type="text" placeholder="Введите email" v-model.trim="email" @input="onInputEmail" required>
              <small v-if="errors.email">{{ errors.email }}</small>
          </div>
          <div class="password" :class="{'invalid': errors.password}">
              <input id="password" :type="showPassword ? 'text' : 'password'" placeholder="Пароль" v-model.trim="password" @input="onInputPassword" required>
              <small v-if="errors.password">{{ errors.password }}</small>
              <img src="../assets/img/icons/eye-close.svg" alt="Показать пароль" v-show="!showPassword" @click="showPassword = !showPassword">
              <img src="../assets/img/icons/eye.svg" alt="Cкрыть пароль" v-show="showPassword" @click="showPassword = !showPassword">
          </div>
          <div class="password-repeat" :class="{'invalid': errors.passwordRepeat}">
              <input id="password-repeat" :type="showRepeatPassword ? 'text' : 'password'" placeholder="Повторите пароль" v-model.trim="passwordRepeat" @input="onInputPasswordRepeat" required>
              <small v-if="errors.passwordRepeat">{{ errors.passwordRepeat }}</small>
              <img src="../assets/img/icons/eye-close.svg" alt="Показать пароль" v-show="!showRepeatPassword" @click="showRepeatPassword = !showRepeatPassword">
              <img src="../assets/img/icons/eye.svg" alt="Cкрыть пароль" v-show="showRepeatPassword" @click="showRepeatPassword = !showRepeatPassword">
          </div>
          <input id="button-register" type="submit" class="registration__button" value='Зарегистрироваться' :disabled="disabledButton" />
      </form>
      <div id="report" class="report" v-if="errors.report">{{ errors.report }}</div>
      

      <div class="button-login">
            <router-link to="/login">
                <a>Войти</a>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            disabledButton: false,
            login: '',
            email: '',
            password: '',
            passwordRepeat: '',
            errors: {
                login: '',
                email: '',
                password: '',
                passwordRepeat: '',
                report: ''
            },
            isFormValid: true,
            showPassword: false,
            showRepeatPassword: false,
        }
    },
    methods: {
        validLogin() {
          this.errors.login = ''

          if(this.login.length <= 2){
              this.errors.login = 'Логин должен быть больше 2 символов';
              this.isFormValid = false
          }
        },
        validateEmail() {
            this.errors.email = ''

            const emailRegex = /^[^\s@]+@[^\s@]{2,}\.[^\s@]{2,}$/;
            if (!emailRegex.test(this.email)) {
                this.errors.email = 'Некорректный email';
                this.isFormValid = false
            }
        },
        validatePassword() {
            this.errors.password = ''
            if(this.password.length < 5) {
                this.errors.password = 'Длина пароля должна быть больше 4 символов';
                this.isFormValid = false
            }
        },
        equalsPassword() {
            this.errors.passwordRepeat = ''

            if(this.password != this.passwordRepeat){
                this.errors.passwordRepeat = 'Пароли не совпадают';
                this.isFormValid = false
            }
        },
        onInputPassword() {
            if(this.errors.password)
                this.validatePassword()
        },
        onInputEmail(){
            if(this.errors.email)
                this.validateEmail()
        },
        onInputPasswordRepeat() {
            // if(this.errors.passwordRepeat)
                this.equalsPassword()
        },
        submit() {
            this.errors.report = ''
            this.isFormValid = true
            this.validLogin();
            this.validateEmail();
            this.validatePassword();
            this.equalsPassword();

            if(this.isFormValid) {
                this.disabledButton = true;
                this.$store.dispatch('auth/registration', {
                    login: this.login.trim(),
                    email: this.email.trim(),
                    password: this.password.trim()
                }).then(() => {
                    this.$store.dispatch('auth/login', {
                        login: this.login,
                        password: this.password
                    }).then(() => {
                        this.$router.push('/')
                    })
                }).catch((response) => {
                    this.disabledButton = false;
                    if(response == 1) {
                        this.errors.login = 'Логин уже занят'
                    }else{
                        if(response == 2) {
                            this.errors.email = 'Email уже занят'
                        }else{
                            this.errors.report = 'Произошла внутренняя ошибка сервера. Повторите попытку позже'
                        }
                    }


                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/authorization';
  ._container-registration {
      max-width: 393px;
      margin: 0px auto;
      padding: 0 15px;
      box-sizing: content-box; /* Сам прибавляет padding */

      @media (min-width: 393px) {
        padding: 0;
      }
  }

  form {
    width: 250px;
    margin: 0 auto;
  }

  .login, .email {
      margin-top: 50px;

      input {
          display: block;
          height: 30px;
          width: 240px;
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
  }

  .email {
    margin-top: 30px;
  }

  .password, .password-repeat {
      position: relative;
      margin-top: 30px;

      input {
        display: block;
        height: 30px;
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

  .registration__button {
    background-color: #649eed;
    height: 40px;
    width: 240px;
    margin: 0 auto;
    display: block;
    border-radius: 10px;

    margin-top: 40px;

    font-size: 18px;
    color: white;

    transition: background-color 0.3s;

    &:hover {
      background-color: #5382c4;

      cursor: pointer;
    }

    &:disabled {
        background-color: #e7e7e7;
        color: #707070;
        cursor: default;
    }
  }
  

.button-login {
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

    @media (max-height: 530px) {
        position: unset;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

  .report {
      margin-top: 30px;
      text-align: center;
      font-style: 20px;
      color: red;
  }
</style>