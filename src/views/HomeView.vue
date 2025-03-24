<template>
  <div class="container _container">
    <the-header></the-header>
    <div align='center' v-if="currentBanks.length === 0 && !loading && !error">Добавьте новый банк</div>
    <button 
      class="addCurrentBank" 
      v-if="currentBanks.length === 0 && !loading && !error"
      @click.prevent="$refs.popupAddCurrentBankRef.open()"
    >Добавить банк</button>
    <app-bank-container 
      :title="bank.name" 
      :editing="editing" 
      v-for="bank in currentBanks" :key="bank.id" 
      :backgroundColor="bank.backgroundColor" 
      :color="bank.color"
      @openPopup="$refs.popupAddCurrentCategoryRef.open(bank.id)" 
      @delete="$refs.popupDeleteCurrentBankRef.open(bank.id, bank.name)"
    >
      <app-category 
        v-for="category in bank.categories"
        :key="category.id"
        :img="category.img"
        :background-color="category.backgroundColor"
        :editing="editing"
        :no-active="!!category.noActive" 
        @delete='deleteCurrentCategory(bank.id, category.idCC)'
    
        @mousedown.prevent="holdByCategory(category.idCC)"
        @mouseup.prevent="clearTimer(category)"
        @pointerdown.prevent="holdByCategory(category.idCC)"
        @pointerup.prevent="clearTimer(category)"
        @pointerleave.prevent="clearTimer2"
      >{{ category.name }}</app-category>
    </app-bank-container>
    <app-button-edit @toggle-editing="toggleEditing"></app-button-edit>

    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif">
    </div>

    <!-- <div class="error" v-if="error">
      <p>Произошла внутренняя ошибка сервера.</p>
      <p>Повторите попытку позже.</p>
    </div> -->

    <div class="error" v-if="error">
        <span class="error__code">500 SERVER ERROR</span>
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g id="036---Boomers-No-Savings"><path id="Path" d="m17.707 28.293c-.3904999-.3903819-1.0235001-.3903819-1.414 0l-.793.793-.793-.793c-.3923789-.3789722-1.0160848-.3735524-1.4018186.0121814s-.3911536 1.0094397-.0121814 1.4018186l.793.793-.793.793c-.2599566.2510745-.3642126.6228779-.2726972.9725073.0915155.3496295.3645604.6226744.7141899.7141899.3496294.0915154.7214328-.0127406.9725073-.2726972l.793-.793.793.793c.3923789.3789722 1.0160848.3735524 1.4018186-.0121814s.3911536-1.0094397.0121814-1.4018186l-.793-.793.793-.793c.3903819-.3904999.3903819-1.0235001 0-1.414z" fill="#000000" style="fill: rgb(216, 0, 0);"></path><path id="Shape" d="m59 26c-.5522847 0-1 .4477153-1 1 0 5.42-4.155 6.639-6.065 6.915-.646-7.675-8.062-14-18.266-15.546.4329639-1.8589536 1.0559057-3.6684672 1.859-5.4 2.6317575-.2940749 4.5778131-2.5890944 4.437753-5.23352454-.1400601-2.64443011-2.3176557-4.72104381-4.965753-4.73547546-.138 0-.274.006-.41.017-.7911298-1.83129872-2.5951212-3.01709809-4.59-3.01709809s-3.7988702 1.18579937-4.59 3.01709809c-.136-.011-.272-.017-.41-.017-2.6589182-.00084737-4.8534272 2.07945935-4.9945464 4.73463021-.1411192 2.65517089 1.8205178 4.95637179 4.4645464 5.23736979.7678301 1.6598946 1.3707258 3.3912101 1.8 5.169-1.1169252.0871604-2.2278132.2394192-3.327.456-.2243305.0438819-.4567973.0155238-.664-.081l-7.212-3.6c-.6508647-.3235788-1.426045-.2685648-2.0246881.1436906-.598643.4122554-.9264941 1.1168438-.8563119 1.8403094l.548 5.455c.0397727.3319128-.0889342.6617477-.343.879-1.8949252 1.4185275-3.47859072 3.2108298-4.653 5.266-.12156148.2409734-.34796762.4119784-.613.463l-4.73.79c-1.38429366.2276763-2.39887735 1.4261135-2.395 2.829v4.838c-.00306154 1.4009412 1.00980287 2.5975778 2.392 2.826l4.724.792c.27290639.0564107.50541346.2337342.632.482 1.43887044 2.4601011 3.4312204 4.5510585 5.819 6.107.2601445.1637885.4222961.4457749.433.753v8.75c.0016535 1.5843718 1.2856282 2.8683465 2.87 2.87h4.74c1.2631971-.0098034 2.3747303-.8361724 2.748-2.043l1.642-5.477c.1291102-.4214079.5172625-.7098885.958-.712h4.088c.4410105.002247.8292483.2911964.958.713l1.641 5.48c.3727164 1.2053593 1.4833607 2.0303516 2.745 2.039h4.74c1.5843718-.0016535 2.8683465-1.2856282 2.87-2.87v-8.75c.0087269-.3049409.1683687-.5856256.426-.749 4.5-3.009 7.2-7.228 7.537-11.692 3.224-.351 8.037-2.498 8.037-8.939 0-.5522847-.4477153-1-1-1zm-37-18c0-1.65685425 1.3431458-3 3-3 .0000141.42125328.0527574.8408483.157 1.249.1135926.4418268.5118047.7507703.968.751.084291-.00001464.1682583-.01042659.25-.031.2570644-.06592501.4773816-.23132867.6124277-.45978167.1350461-.22845301.1737446-.50121744.1075723-.75821833-.0631651-.24533407-.0950844-.49766499-.095-.751.0019358-.2386645.0318058-.47628181.089-.708.3251938-1.34399638 1.5282212-2.29065349 2.9109983-2.29065349 1.3827805 0 2.5858079.94665711 2.9110017 2.29065349.0571942.23171819.0870642.4693355.089.708.0000844.25333501-.0318349.50566593-.095.751-.0661723.25700089-.0274738.52976532.1075723.75821833.1350461.228453.3553633.39385666.6124277.45978167.0817417.02057341.165709.03098536.25.031.4561953-.0002297.8544074-.3091732.968-.751.1042426-.4081517.1569859-.82774672.157-1.249 1.6568542-.00745581 3.0060441 1.32964578 3.0134999 2.9865.0074559 1.65685423-1.3296457 3.0060441-2.9864999 3.0135h-.027c-.7305953-.0000763-1.4360535-.2667566-1.984-.75-.2679492-.2363312-.6416257-.31176107-.9802691-.1978759-.3386434.1138853-.5908058.3997837-.6615.7500001s.0508199.7115446.3187691.9478758c.5105013.4438434 1.1058854.7792998 1.75.986-.8811456 2.0121077-1.5368066 4.1155888-1.955 6.272-.2619679 1.3443714-.4181132 2.7072153-.467 4.076-.0186473.5206453.3655597.9683793.883 1.029 1.265458.0976637 2.4981293.4500499 3.624 1.036.2229703.1311699.384308.3459703.4481539.5966593s.02491.5164955-.1081539.7383407c-.2846087.4732001-.8924502.6366458-1.376.37l-.067-.034c-1.3981155-.5908811-2.9079967-.8706782-4.425-.82-1.5169289-.0496891-3.0265996.2300691-4.425.82l-.067.034c-.4773375.266479-1.0798372.110569-1.368-.354-.1375532-.2241688-.178708-.4944014-.1141223-.7493548s.2294333-.4730008.4571223-.6046452c1.1229464-.5824725 2.351719-.932773 3.613-1.03.5170444-.0605929.9011147-.5077325.883-1.028-.053105-1.4237616-.2203077-2.8409712-.5-4.238-.422249-2.1000199-1.0720847-4.1477735-1.938-6.107.6494445-.2060572 1.2497874-.5429843 1.764-.99.2679492-.2363312.3894633-.5976594.3187691-.9478758s-.3228566-.6361148-.6615-.75c-.3386435-.11388523-.7123199-.0384554-.9802691.1978758-.5232997.4589178-1.1902653.7209653-1.886.741-.0421424.0004734-.0842182.0034788-.126.009-1.6462965-.0164629-2.9717287-1.3566221-2.97-3.003zm21.318 37.966c-.8172341.5319134-1.3124455 1.4389243-1.318 2.414v8.75c-.0010997.4800315-.3899685.8689003-.87.87h-4.74c-.3821403-.0024309-.7187141-.2520295-.832-.617l-1.64-5.475c-.3847833-1.2665898-1.5502641-2.1344148-2.874-2.14h-4.088c-1.3234623.0054505-2.4888572.872806-2.874 2.139l-1.639 5.472c-.1119683.3669033-.4494007.6184585-.833.621h-4.74c-.4800315-.0010997-.8689003-.3899685-.87-.87v-8.75c-.0104136-.9714988-.5023655-1.8744722-1.313-2.41-2.1318713-1.3828556-3.9122607-3.2433626-5.2-5.434-.42342171-.7792371-1.18012153-1.3218947-2.054-1.473l-4.712-.79c-.41672964-.0695163-.72186278-.4305129-.721-.853v-4.838c-.00110709-.4243755.30615074-.7867278.725-.855l4.72-.789c.8685457-.1466405 1.62089318-.6857183 2.039-1.461 1.042964-1.8180757 2.4479471-3.402766 4.128-4.656.7950508-.6389451 1.214005-1.6359357 1.114-2.651l-.552-5.47 7.209 3.6c.6005962.2950946 1.2815112.3846887 1.938.255 1.1043012-.2183065 2.2211315-.3675957 3.344-.447.118.724.215 1.444.267 2.15-1.2216582.1786009-2.4015507.5741561-3.484 1.168-1.4116609.8381444-1.8775414 2.6613886-1.041 4.074.8298179 1.390839 2.6045688 1.8865377 4.035 1.127 1.1275243-.461004 2.3408108-.6748125 3.558-.627 1.2168998-.0490797 2.4301756.1633629 3.558.623 1.435897.7602791 3.2157849.2584061 4.043-1.14.8209345-1.4049615.3580111-3.2089358-1.038-4.045-1.0867471-.5984248-2.2723009-.9964322-3.5-1.175.048-.649.131-1.292.229-1.929 9.588 1.438 16.708 7.615 16.708 14.666 0 4.129-2.437 8.127-6.682 10.966z" fill="#000000" style="fill: rgb(216, 0, 0);"></path></g></svg>
        <span class="error__text">Произошла внутренняя ошибка сервера. <br />Повторите попытку позже.</span>
    </div>

    <app-popup-add-current-category
      :current-categories="$store.state.categories"
      ref="popupAddCurrentCategoryRef"
    ></app-popup-add-current-category>

    <app-popup-delete-current-bank
      ref="popupDeleteCurrentBankRef"
    ></app-popup-delete-current-bank>

    <app-popup-category-about
      :editing="editing"
      ref="popupCategoryAboutRef" 
    ></app-popup-category-about>

    <app-popup-add-current-bank
      ref="popupAddCurrentBankRef"
    >
    </app-popup-add-current-bank>
  </div>
</template>

<script>
import axios from 'axios'
import AppBankContainer from "../components/AppBankContainer.vue";
import AppCategory from "../components/AppCategory.vue";
import AppButtonEdit from "../components/AppButtonEdit.vue";
import AppPopupAddCurrentCategory from "@/components/popups/AppPopupAddCurrentCategory.vue";
import AppPopupDeleteCurrentBank from "@/components/popups/AppPopupDeleteCurrentBank.vue";
import AppPopupCategoryAbout from "@/components/popups/AppPopupCategoryAbout.vue";
import AppPopupAddCurrentBank from '@/components/popups/AppPopupAddCurrentBank.vue';

export default {
  data() {
    return {
      // currentBanks: [],
      editing: false,
      timer: null,
      timerFlag: false,
      // loading: false,
      error: false,
    }
  },
  computed: {
    currentBanks() {
      return this.$store.state.currentBanks.currentBanks
    },
    loading() {
      return this.$store.state.currentBanks.loading
    }
  },
  methods: {
    holdByCategory(categoryId) {
      this.timerFlag = false

      this.timer = setTimeout(_ => {
        this.toggleNoActive(categoryId)
        this.timerFlag = true
      }, 800)      
    },
    clearTimer(category) {
      if(!this.timerFlag)
        this.$refs.popupCategoryAboutRef.open(category) // Открываем попап

      clearTimeout(this.timer)  
    },
    clearTimer2() {
      clearTimeout(this.timer)  
    },
    toggleNoActive(currentCategoryId) {
      this.$store.dispatch('currentBanks/toggleNoActive', currentCategoryId).catch(() => console.log('Произошла ошибка при смене noActive'))

      this.currentBanks.forEach(banks => {
        let categories = banks.categories
        let cat = categories.filter(category => {return category.idCC === currentCategoryId})
        if(cat.length != 0)
          cat[0].noActive = !cat[0].noActive
      });
    },
    toggleEditing() {
      this.editing = !this.editing
    },
    async deleteCurrentCategory(bankId, curCatId) {
      const url = `${process.env.VUE_APP_API_URL}/api/v1/currentCategory/${curCatId}`
      const token = this.$store.getters['auth/token']
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete( 
        url,
        config
      ).then((responseText) => {
        console.log(responseText)
      })
       .catch((e) => {
        console.log(e)
      });
      

      // Удаление из массива
      const cat = this.currentBanks.filter(i => { return i.id === bankId })[0].categories    // Получаем все категории банка
      const newArr = cat.filter(item => { return item.idCC !== curCatId; })                // Удаляем лишнюю категорию
      this.currentBanks.filter(i => { return i.id === bankId })[0].categories = newArr       // Перезаписываем
    },
    async getCurrentCategories() {
      this.loading = true
      
      this.$store.dispatch('currentBanks/fetchCurrentBanks').then(() => {
        // this.currentBanks = this.$store.getters['currentBanks/currentBanks']
        this.loading = false
      }).catch((e) => {
          console.log(e)
          this.error = true
          this.loading = false

          if(e.status == 401) {
            // Человек не авторизирован
            this.$store.commit('auth/logout')
            this.$router.push('/login')
          }
      })
    },
  },
  mounted() {
    // this.getCurrentCategories()
  },
  components: {
    AppBankContainer, 
    AppCategory, 
    AppButtonEdit,
    AppPopupAddCurrentCategory,
    AppPopupDeleteCurrentBank,
    AppPopupCategoryAbout,
    AppPopupAddCurrentBank
  },
}

</script>


<style lang="scss" scoped>
  @import '../assets/css/variables';

  .loading {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 600px;
    height: 100%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
    }
  }

  .addCurrentBank {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4f92e0;
    border-radius: 8px;
    width: 150px;
    height: 45px;
    color: #4f92e0;
    font-weight: 600;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 15px;
    transition: 0.3s all;
    background-color: white;

    &:hover {
      background-color: #4f92e0;
      color: white;
    }
  }

  .error {
    width: 300px;
    margin: 0 auto;
    background-color: rgba(255, 0, 0, 0.377);
    border: 2px solid rgb(216, 0, 0);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    text-align: center;

    &__code{
      font-size: 30pt;
      font-weight: bold;
    }

    svg{
      width: 100px;
      padding: 10px;
    }
    
    &__text{
      font-size: 15pt;
    }
  }
</style>