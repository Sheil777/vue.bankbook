<template>
  <div id="popup-delete-current-bank" class="popup-delete-current-bank popup" :class="{'open': openPopupDeleteCurrentBank}">
    <div class="popup-delete-current-bank__body">
        <div class="popup-delete-current-bank__content popup__content">
            <div class="popup-delete-current-bank__block">
                <div class="popup-delete-current-bank__header">Вы действительно хотите удалить банк "<span>{{ bankName }}</span>"?</div>
                <div class="popup-delete-current-bank__buttons">
                    <div class="popup-delete-current-bank__yes" @click="this.$emit('deleteBank')">Да</div>
                    <div class="popup-delete-current-bank__no" @click="this.$emit('closePopup')">Нет</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openPopupDeleteCurrentBank: {
      type: Boolean
    },
    bankName: {
      type: String,
    }
  },
  emits: ['closePopup', 'deleteBank']
}
</script>