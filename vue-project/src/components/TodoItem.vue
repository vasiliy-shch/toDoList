<template>
        <div class="todo">
            <div> 
             <label class="todos-label">
              <div> <input type="checkbox"> {{ todo.title }} </div>
                <my-button 
                class="todos-button__delete"
                @click="$emit('remove', todo)"
                >
                    Удалить</my-button>
             </label> 
            </div>
        </div>
</template>

<script>
export default {
    props: {
        todo: Object, 
        required: true
    }
}
</script>

<style scoped>
.todos-label {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 20px;
}
/* .todos-button__delete {
    padding: 10px 15px;
    background-color: mintcream;
    border: 2px solid teal;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
}
.todos-button__delete:hover {
    opacity: 0.4;
} */

.todo {
    display: flex;
    flex-direction: column;
}
</style>