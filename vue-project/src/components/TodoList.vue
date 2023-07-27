<template>
    <div class="todos">
        <div class="todos-title"><strong>Задачи: </strong></div>
        <todo-item 
        v-for="todo in todos"
        v-bind:todo="todo"
        :key="todo.id"
        @remove="$emit('remove', todo)"
        >
        </todo-item>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default{
    components: {TodoItem},
    props: {
        todos: {
            type: Array,
            required: true,          
        }
    }
}

</script>

<style scoped>
.todos {
    display: flex;
    flex-direction: column;
}
.todos-title {
    border-bottom: 2px solid grey;
    font-size: 18px;
    padding-left: 15px;
}

</style>