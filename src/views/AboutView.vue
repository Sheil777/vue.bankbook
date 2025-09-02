<template>
    <!-- <title>BankBook - Все категории кэшбэка ваших банков в одном месте</title> -->
     
  <div class="wrapper">
    <header class="header">
        <div class="container header__container">
            <a href="#" class="logo">
              <img src="../assets/img/logo.png" alt="Логотип">
            </a>
            
            <nav class="nav-links">
                <a href="#hero">Главная</a>
                <a href="#demo">Демо</a>
                <a href="#features">Возможности</a>
                <!-- <a href="#">Контакты</a> -->
            </nav>
            
            <div class="auth-buttons">
                <a href="/login" class="btn btn-outline">Войти</a>
                <a href="/registration" class="btn btn-primary">Регистрация</a>
            </div>
            
            <button class="mobile-menu-btn" @click="openMenu">☰</button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="container">
            <h1>Все категории кэшбэка ваших банков в одном месте</h1>
            <p>Наведите порядок в своих финансах и перестаньте терять деньги. Управляйте всеми своими картами и категориями кэшбэка в едином личном кабинете.</p>
            
            <div class="hero-buttons">
                <a href="/registration" class="btn btn-primary">Попробовать бесплатно</a>
                <a href="#demo" class="btn btn-outline">Смотреть демо</a>
            </div>
            
            <div class="demo" id="demo">
                <div class="demo__container">
                    <div class="demo__header">
                        <div>Личный кабинет BankBook</div>
                        <div>Демо-режим</div>
                    </div>
                    <div class="demo__content">
                        <div class="demo-card">
                            <img src="../assets/img/logo.png" alt="Логотип">
                            <app-bank-container title="Т-Банк" backgroundColor="yellow">
                                <app-category>1% Все покупки</app-category>
                                <app-category img="auto.svg" backgroundColor="dodgerblue">5% Автоуслуги</app-category>
                            </app-bank-container>
                            <app-bank-container title="Альфа-банк" backgroundColor="red" color="white">
                                <app-category img="plug.svg" backgroundColor="rgb(44, 117, 255)">7% Электроника</app-category>
                                <app-category img="burger.svg" backgroundColor="orange">5% Фастфуд</app-category>
                            </app-bank-container>
                            <app-bank-container title="Сбербанк" backgroundColor="green" color="white">
                                <app-category img="fuel.svg" backgroundColor="rgb(66, 170, 255)">5% АЗС</app-category>
                                <app-category img="pill.svg" backgroundColor="rgb(60, 170, 60)">10% Аптеки</app-category>
                            </app-bank-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Почему выбирают BankBook</h2>
                <p>Мы делаем управление кэшбэком простым и эффективным</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">💸</div>
                    <h3>Максимизируйте доход</h3>
                    <p>Получайте максимальный кэшбек с каждой покупки, используя правильную карту в&nbsp;нужной категории</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Ведите учет</h3>
                    <p>Добавляйте магазины из своего города в&nbsp;приложение, чтобы не путать их с&nbsp;другими категориями</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🔔</div>
                    <h3>Получайте уведомления</h3>
                    <p>Будьте в курсе изменений в категориях кэшбэка и специальных акций банков</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Доступ везде</h3>
                    <p>Пользуйтесь сервисом с любого устройства — компьютера, телефона или планшета</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🛡️</div>
                    <h3>Безопасность</h3>
                    <p>Ваши данные надежно защищены — мы не запрашиваем номера карт и пароли от банков</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">💼</div>
                    <h3>Все банки в одном месте</h3>
                    <p>Управляйте категориями Тинькофф, Сбербанка, Альфа-Банка и других банков в едином интерфейсе</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Начните экономить умнее уже сегодня</h2>
            <p>Присоединяйтесь к другим пользователям, которые уже получают максимальный кэшбек с каждой покупки</p>
            
            <div class="cta-buttons">
                <a href="/registration" class="btn btn-light">Создать аккаунт</a>
                <a href="#demo" class="btn btn-outline" style="color: white; border-color: white;">Узнать больше</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">
                        <img src="../assets/img/logo.png" alt="Логотип">
                    </div>
                    <p class="footer-description">Сервис для управления категориями кэшбэка всех ваших банков в одном личном кабинете.</p>
                </div>
                
                <div>
                    <h3 class="footer-heading">Навигация</h3>
                    <ul class="footer-links">
                        <li><a href="#hero">Главная</a></li>
                        <li><a href="#demo">Демо</a></li>
                        <li><a href="#features">Возможности</a></li>
                        <li><a href="/login">Авторизация</a></li>
                    </ul>
                </div>
                
                <!-- <div>
                    <h3 class="footer-heading">Поддержка</h3>
                    <ul class="footer-links">
                        <li><a href="#">Помощь</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Сообщество</a></li>
                    </ul>
                </div> -->
                
                <!-- <div>
                    <h3 class="footer-heading">Правовая информация</h3>
                    <ul class="footer-links">
                        <li><a href="#">Политика конфиденциальности</a></li>
                        <li><a href="#">Условия использования</a></li>
                        <li><a href="#">Политика cookies</a></li>
                    </ul>
                </div> -->
            </div>
            
            <div class="footer-bottom">
                <p>© 2023 BankBook. Все права защищены.</p>
            </div>
        </div>
    </footer>

    <!-- Mobile Menu -->
    <div :class="['overlay', {'active': isOpenMobileMenu}]" id="overlay" @click="closeMenu"></div>
    
    <div :class="['mobile-menu', {'active': isOpenMobileMenu}]" id="mobile-menu">
        <button class="mobile-menu-close" id="close-menu" @click="closeMenu">✕</button>
        
        <ul class="mobile-nav-links">
            <li><a href="#hero">Главная</a></li>
            <li><a href="#features">Возможности</a></li>
            <li><a href="#demo">Демо</a></li>
        </ul>
        
        <div class="mobile-auth-buttons">
            <a href="/login" class="btn btn-outline">Войти</a>
            <a href="/registration" class="btn btn-primary">Регистрация</a>
        </div>
    </div>
  </div>
</template>

<script>
    import AppBankContainer from "../components/AppBankContainer.vue";
    import AppCategory from "../components/AppCategory.vue";

    export default {
        data () {
            return {
                isOpenMobileMenu: false,
            }
        },
        components: {
            AppBankContainer,
            AppCategory,
        },
        mounted() {
            this.initSmoothScrolling();
        },
        methods: {
            initSmoothScrolling() {
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        this.closeMenu();
                        
                        window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                        });
                    }
                    });
                });
            },
            closeMenu() {
                this.isOpenMobileMenu = false
                document.body.style.overflow = 'auto';
            },
            openMenu() {
                this.isOpenMobileMenu = true
                document.body.style.overflow = 'hidden';
            },
        }
    }

    // Mobile menu functionality
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // const closeMenuBtn = document.querySelector('#close-menu');
    // const mobileMenu = document.querySelector('#mobile-menu');
    // const overlay = document.querySelector('#overlay');
    
    
    // overlay.addEventListener('click', closeMenu);
        
</script>

<style lang="scss" scoped>

        .wrapper {
            --primary: #5382c4;
            --primary-dark: #43679b;
            --secondary: #10b981;
            --dark: #1f2937;
            --light: #f9fafb;
            --gray: #9ca3af;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            user-select: text !important;
        }
        
        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;

            &__container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
            }
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);

            img {
              height: 30px;
            }
        }
        
        .nav-links {
            display: flex;
            gap: 25px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        .auth-buttons {
            display: flex;
            gap: 10px;
        }
        
        .btn {
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-outline {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: transparent;
        }
        
        .btn-outline:hover {
            background: var(--primary);
            color: white;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
            border: none;
        }
        
        .btn-primary:hover {
            background: var(--primary-dark);
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--dark);
        }
        
        /* Hero Section */
        .hero {
            padding: 150px 0 80px;
            background: linear-gradient(135deg, #f6f7ff 0%, #eef2ff 100%);
            text-align: center;
        }
        
        .hero h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            color: var(--dark);
        }
        
        .hero p {
            font-size: 1.2rem;
            color: var(--dark);
            max-width: 700px;
            margin: 0 auto 40px;
        }
        
        .hero-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-bottom: 50px;
        }
        
        .demo {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            margin: 0 auto;

            @media (max-width: 440px) {
                padding: 0;
            }

            &__container {
                position: relative;
                overflow: hidden;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
            }

            &__header {
                background: var(--primary);
                padding: 15px;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            &__content {
                background: #f8fafc;
                padding: 20px;
                display: flex;
                justify-content: center;

                @media (max-width: 480px) {
                    padding: 0;
                }
            }
        }
        
        .demo-card {
            position: relative;
            background: white;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            max-width: 500px;

            img {
                width: 80%;
            }
        }
        
        /* Features Section */
        .features {
            padding: 80px 0;
            background: white;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .section-title h2 {
            font-size: 2.2rem;
            color: var(--dark);
            margin-bottom: 15px;
        }
        
        .section-title p {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        
        .feature-card {
            text-align: center;
            padding: 30px 20px;
            border-radius: 10px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            width: 70px;
            height: 70px;
            background: #eef2ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: var(--primary);
            font-size: 1.8rem;
        }
        
        .feature-card h3 {
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        /* CTA Section */
        .cta {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            text-align: center;
        }
        
        .cta h2 {
            font-size: 2.2rem;
            margin-bottom: 20px;
        }
        
        .cta p {
            max-width: 600px;
            margin: 0 auto 30px;
            font-size: 1.1rem;
        }
        
        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
        }
        
        .btn-light {
            background: white;
            color: var(--primary);
        }
        
        .btn-light:hover {
            background: #f3f4f6;
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 50px 0 20px;
        }
        
        .footer-grid {
            display: flex;
            // grid-template-columns: 2fr 1fr;
            justify-content: space-between;
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: white;

            img {
                height: 30px;
            }
        }
        
        .footer-description {
            color: #d1d5db;
            margin-bottom: 20px;
        }
        
        .footer-heading {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: white;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            color: #d1d5db;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 20px;
            text-align: center;
            color: #9ca3af;
            font-size: 0.9rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
            
            .demo-content {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links, .auth-buttons {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }

        @media (max-width: 440px) {
            .footer-grid {
                display: block;
            }
        }
        
        /* Mobile menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: white;
            z-index: 1000;
            padding: 50px 20px;
            transition: right 0.3s;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu.active {
            right: 0;
        }
        
        .mobile-menu-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .mobile-nav-links {
            list-style: none;
            margin-bottom: 30px;
        }
        
        .mobile-nav-links li {
            margin-bottom: 15px;
        }
        
        .mobile-nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            font-size: 1.1rem;
        }
        
        .mobile-auth-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }
        
        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
</style>