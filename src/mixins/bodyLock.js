export default {
    methods: {
      bodyLock(){
        const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';
  
        document.body.style.paddingRight = lockPaddingValue;
        document.body.classList.add('lock');
      },
      bodyUnlock(){
        document.body.style.paddingRight = '0px';
        document.body.classList.remove('lock');
      },
    },
}