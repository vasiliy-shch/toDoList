<template>
<div class="app">
    <task-form 
    @add="addTodo"
    >
    </task-form>
    
    <todo-list 
    v-bind:todos="todos"
    @remove="removeTodo"
    ></todo-list>
</div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import TodoList from "@/components/TodoList.vue";

export default {
    components: {
        TaskForm, TodoList,
    },
        data() {
            return {
                todos: [
                    // {id: 1, title: 'Рыба'},
                    // {id: 2, title: 'Работать'},
                    // {id: 3, title: 'Погулять с собакой'},
                ],
            }
        },
        methods: {
            addTodo(todo) {
                this.todos.push(todo);
            },
            removeTodo(todo) {
               this.todos = this.todos.filter(t => t.id !== todo.id);
            }
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 30px;
}


</style>