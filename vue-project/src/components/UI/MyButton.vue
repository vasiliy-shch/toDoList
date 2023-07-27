<!-- пример создания UI компонента в main.js его глобальная регистрация -->

<template>
    <button class="my-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
}   
</script>

<style scoped>
.my-button {
    align-self:flex-end;
    padding: 10px 15px;
    background-color: mintcream;
    border: 2px solid teal;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
}
.my-button:hover{
    opacity: 0.4;
}
</style>