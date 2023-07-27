<template>
<div>
    <form class="task" @submit.prevent>
        <div class="task-header"><strong> Добавить задачу: </strong></div>
        <!-- v-model="todo.title"  пример, когда логику прописал в MyInput и использвую просто v-model без параметра.
            Также можно реализовать несколько связываний по разным параметрам
        например v-model:value="todo.title" или v-model:myvalue="todo.title" -->
        <my-input 
        v-model="todo.title"
        placeholder="например выйти от сюда"/>
        <my-button 
        class="task-button"
        @click="createTodo"
        >
            Создать
        </my-button>
    </form>
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"; //пример импорта и регистрации компонента 
export default {
    components: {
        MyButton
    },
    data() {
        return {
            todo: {
                title: '',
            }
        }
    },
    methods: {
        createTodo() {
                this.todo.id = Date.now();
                this.$emit('add', this.todo)
                this.todo =
                 {
                    title: '',
                };
        }
    }
}

</script>

<style scoped>
.task {
    display: flex;
    flex-direction: column;
}
.task-header {
    padding: 15px;
    font-size: 18px;
}
.task-button {
    margin-top: 15px;
}
</style>