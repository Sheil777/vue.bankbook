<template>
  <div class="container _container-registration">
      <the-header></the-header>
      <form action="#" @submit.prevent="submit">
          <div class="login">
              <input id="form-login" type="text" placeholder="Введите логин" v-model="login" required>
          </div>
          <div class="email">
              <input id="form-email" type="text" placeholder="Введите email" v-model="email" required>
          </div>
          <div class="password">
              <input id="password" type="password" placeholder="Пароль" v-model="password" required>
          </div>
          <div class="password-repeat">
              <input id="password-repeat" type="password" placeholder="Повторите пароль" v-model="passwordRepeat" required>
          </div>
          <input id="button-register" type="submit" class="registration__button" value='Зарегистрироваться' />
      </form>
      <div id="report" class="report">{{ report }}</div>
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
            report: '',
        }
    },
    methods: {
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) 
                this.report = 'Некорректный email';
        },
        equalsPassword() {
            if(this.password != this.passwordRepeat){
                this.report = 'Пароли не совпадают';
            }
        },
        submit() {
            this.report = '';
            this.validateEmail();
            this.equalsPassword();

            
            console.log('aloo')

            if(!this.errors) {
                console.log('submit')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  ._container-registration {
      max-width: 393px;
      margin: 0px auto;
      padding: 0 15px;
      box-sizing: content-box; /* Сам прибавляет padding */

      @media (min-width: 393px) {
        padding: 0;
      }
  }

  .logo {
      margin: 0 auto;
      margin-top: 100px;
      width: 90%;
      img {
          width: 100%;
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