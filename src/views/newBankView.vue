<template>
    <div class="container _container">
      <the-header></the-header>
      <h1>Добавление нового банка</h1>

        <div class="nbank__main">
            <form action="nbank-progress.php" method="POST">
                <div class="text-field text-field_floating-2">
                    <input class="text-field__input" type="input" id="name" name="name" placeholder="Тинькофф">
                    <label class="text-field__label" for="name">Наименование</label>
                </div>

                <select name="color-bg" id="color-bg" required>
                    <option value="" selected="true" disabled="disabled">Цвет фона</option>
                    <option value="white">Белый</option>
                    <option value="yellow">Жёлтый</option>
                    <option value="red">Красный</option>
                    <option value="blue">Синий</option>
                    <option value="green">Зелёный</option>
                </select>

                <select name="color-text" id="color-text" required>
                    <option value="" selected="true" disabled="disabled">Цвет текста</option>
                    <option value="white">Белый</option>
                    <option value="yellow">Жёлтый</option>
                    <option value="red">Красный</option>
                    <option value="blue">Синий</option>
                    <option value="black">Чёрный</option>
                </select>

                <input class="button__submit" type="submit">
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
  .nbank__main {
    padding: 20px;
  }
</style>