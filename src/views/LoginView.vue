<template>
    <div class="container _container-login">
        <the-header></the-header>
        <div class="login">
            <input id='form-login' type="text" placeholder="Введите логин">
        </div>
        <div class="password">
            <input id='password' type="password" placeholder="Пароль">
        </div>
        <div class="report"></div>
        <div id='button-enter' class="button-enter">
            <a href="#">Войти</a>
        </div>
        <div class="button-register">
            <router-link to="/registration">
                <a>Зарегистрироваться</a>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    border: 0;
}

img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-size: inherit;
}

b {
    font-size: inherit;
}

a {
    text-decoration: none;
}

body {
    height: 100%;
    line-height: 1;
    font-size: 16px;
    color: #000;
    font-family: 'Montserrat';
}

.wrapper {
    min-height: 100%;
    overflow: hidden;
}

._container-login {
    max-width: 393px;
    margin: 0px auto;
    padding: 0 15px;
    box-sizing: content-box; /* Сам прибавляет padding */
}

@media (min-width: 393px) {
    ._container-login {
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

.login {
    margin-top: 100px;

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

.password {
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

.button-enter {
  background-color: #649eed;
  height: 40px;
  width: 240px;
  margin: 0 auto;
  border-radius: 10px;

  margin-top: 40px;

  transition: background-color 0.3s;

  &:hover {
    background-color: #5382c4;
    cursor: pointer;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 20px;

    color: white;
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
  