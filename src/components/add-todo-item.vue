<script setup lang="ts">
import type { PropType } from 'vue';
import { useTodo } from "@/composables/use-todo";
import type ToDo from '@/types/to-do';

const { newTodoItem, addTodoItem } = useTodo()

defineProps({
  todoID: {
    type: Object as PropType<ToDo>,
    required: true
  }
})
</script>

<template>
  <div>
    <input v-model="newTodoItem" @keyup.enter="addTodoItem(todoID.id)" required placeholder="Enter tasks.." />
    <button @click="addTodoItem(todoID.id)" style="margin-left: 2%;" id="btn2"> Add Task </button>
  </div>
</template>