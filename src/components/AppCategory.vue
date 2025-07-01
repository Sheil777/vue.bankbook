<template>
    <div class="category bank__category_click" :class="{ 'noActive' : noActive }">
        <div class="category__logo _categoryLogo">
            <img 
                :style="{backgroundColor: backgroundColor ? backgroundColor : 'rgb(108, 32, 183)'}" 
                :src="imgSrc" 
                alt=""
            >
        </div>
        <div class="category__text">
            <slot />
        </div>
        <div class="category__delete" :class="{'visible': editing}" @click="this.$emit('delete')">
            <img src="../assets/img/icons/delete.svg">
        </div>
        <div class="category__edit" :class="{'visible': editing}">
            <img src="../assets/img/icons/edit.svg">
        </div>
        <div class="category__accept" :class="{'visible': added}">
            <img src="../assets/img/accepted.svg">
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
        backgroundColor: {
            type: String,
            default: 'rgb(108, 32, 183)',
        },
        noActive: {
            type: Boolean,
            default: false,
        },
        editing: {
            type: Boolean,
            default: false,
        },
        added: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
            imgSrc: require('../assets/img/icons/package.svg'),
        }
    },
    methods: {
    },
    mounted(){
        try {
            this.imgSrc = require('../assets/img/icons/' + this.img);
        }catch(e){
            // console.warn('Несуществующая картинка в категории')
            // console.warn('Несуществующая картинка в категории ' + this.$slots + ': ' + this.img)
        }
    }
}
</script>

<style lang="scss" scoped>
    .category {
        position: relative;
        display: flex;
        justify-content: left;
        align-items: center;
        min-height: 50px;
        font-size: 20px;
        border-bottom: 1px solid black;
        cursor: pointer;

        &.noActive {
            background-color: rgb(194, 194, 194); 
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

        &__text {
            padding: 5px 0;
            padding-right: 10px;
        }

        &__accept {
            position: absolute;
            right: 20px;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.5s;

            img {
                height: 22px;
            }
        
            &.visible {
                visibility: visible;
                opacity: 1;
            }
        }
    }
</style>