<template>
  <div class="container _container-registration">
      <the-header></the-header>
      <form action="#" @submit.prevent="submit">
          <div class="login" :class="{'invalid': errors.login}">
              <input id="form-login" type="text" placeholder="Введите логин" v-model.trim="login" required>
              <small v-if="errors.login">{{ errors.login }}</small>
          </div>
          <div class="email" :class="{'invalid': errors.email}">
              <input id="form-email" type="text" placeholder="Введите email" v-model.trim="email" required>
              <small v-if="errors.email">{{ errors.email }}</small>
          </div>
          <div class="password" :class="{'invalid': errors.password}">
              <input id="password" type="password" placeholder="Пароль" v-model.trim="password" required>
              <small v-if="errors.password">{{ errors.password }}</small>
          </div>
          <div class="password-repeat" :class="{'invalid': errors.passwordRepeat}">
              <input id="password-repeat" type="password" placeholder="Повторите пароль" v-model.trim="passwordRepeat" required>
              <small v-if="errors.passwordRepeat">{{ errors.passwordRepeat }}</small>
          </div>
          <input id="button-register" type="submit" class="registration__button" value='Зарегистрироваться' />
      </form>
      <div id="report" class="report" v-if="errors.report">{{ errors.report }}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
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

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        submit() {
            this.errors.report = ''
            this.isFormValid = true
            this.validLogin();
            this.validateEmail();
            this.validatePassword();
            this.equalsPassword();

            
            console.log('aloo')

            if(this.isFormValid) {
                this.$store.dispatch('auth/registration', {
                    login: this.login.trim(),
                    email: this.email.trim(),
                    password: this.password.trim()
                }).then(() => {
                    this.$store.dispatch('auth/login', {
                        login: this.email,
                        password: this.password
                    }).then(() => {
                        this.$router.push('/')
                    })
                }).catch((response) => {

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
      margin-top: 30px;

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
  }

  .report {
      margin-top: 30px;
      text-align: center;
      font-style: 20px;
      color: red;
  }
</style>