<template> 
<!-- вешаем на инпут свойство value со значением 'modelValue'
и прикрепляем слушатель события input со значение updateInput -->
    <input 
        v-bind:value="modelValue" 
        v-on:input="updateInput"
        class="task-input"
        type = "text"
        > 
</template>

<script>
export default {
    name: 'my-input',
    // задаем свойства modelValue: [Строка, Число]
    props: {
        
    modelValue: [String, Number] // пример реализации для v-model

    // пример реализации через Value: [String, Number],
    },
    // создаем метод updateInput, который принимаем событие и внутри эмитим*
    // по особому шаблону Vue, который принимает update:modelValue (но можно
    // явно задать иное значение), а вторым параметром event.target.value
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.task-input{
    width:100%;
    border: 1px solid teal;
    padding: 10px 15px;
    border-radius: 5px;
}
</style>