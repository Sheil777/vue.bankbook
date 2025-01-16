<template>
    <div class="bank__category bank__category_click" :class="{ 'noActive' : noActive }">
        <div class="category__logo">
            <img 
                style="background-color: rgb(108, 32, 183); " 
                :src="imgSrc" 
                alt=""
            >
        </div>
        <div class="category__text"><slot /></div>
        <div class="category__delete" :class="{'visible': editing}" id_cc="590">
            <img src="../assets/img/icons/delete.svg">
        </div>
        <div class="category__edit" :class="{'visible': editing}">
            <img src="../assets/img/icons/edit.svg">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: 'package.svg',
        },
        noActive: {
            type: Boolean,
            default: false,
        },
        editing: {
            type: Boolean,
        }
    },
    data(){
        return {
            imgSrc: require('../assets/img/icons/package.svg'),
        }
    },
    mounted(){
        try {
            this.imgSrc = require('../assets/img/icons/' + this.img);
        }catch(e){
            console.warn('Несуществующая картинка в категории')
            // console.warn('Несуществующая картинка в категории ' + this.$slots + ': ' + this.img)
        }
    }
}
</script>

<style lang="scss">
    .bank {
        &__category {
            display: flex;
            justify-content: left;
            align-items: center;
            height: 50px;
            font-size: 20px;
            border-bottom: 1px solid black;
            cursor: pointer;
    
            &.noActive {
                background-color: rgb(194, 194, 194); 
            }
        }
    }

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
            // padding-right: 20px;
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
    }
</style>