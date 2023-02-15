<script setup lang="ts">
import { useTodo } from "@/composables/use-todo";
import TodoItems from './todo-items.vue';
import AddTodoItem from './add-todo-item.vue';
import EditTodo from './edit-todo-title.vue';

const { todos, removeTodo } = useTodo()

</script>
<template>
  <div v-for="todo in todos" :key="todo.id" id="cardTD">
    <EditTodo :todoTitle="todo" />
    <div style="padding-top: 6%;">
      <TodoItems :todoItem="todo" />
      <AddTodoItem :todoID="todo" />
    </div>
    <div id="card-action">
      <button @click="removeTodo(todo.id)" style="float:right; display: flex;" id="btn">🗑️ Delete </button>
    </div>
  </div>
</template>