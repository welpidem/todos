<script setup lang="ts">
import type { PropType } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import type ToDo from '@/types/to-do';
import EditTodoItem from './edit-todo-item.vue';

defineProps({
  todoItem: {
    type: Object as PropType<ToDo>,
    required: true
  },
  show: {
    type: Boolean
  }
})
</script>
<template>
  <VueDraggableNext>
    <div v-for="items in todoItem.list" :key="items.id" style="background-color: rgb(7, 73, 51); cursor: move;">
      <EditTodoItem :todoItem="items" />
    </div>
  </VueDraggableNext>

</template>
