<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import { useTodo } from "@/composables/use-todo";
import type ToDoItem from '@/types/to-do-items';

const { updateItem, editingItem, removeItem } = useTodo()

defineProps({
    todoItem: {
        type: Object as PropType<ToDoItem>,
        required: true
    }
})

const edit = ref(false);
const todoItemId = ref('');

const closeEdit = () => {
    edit.value = false
}

const show = (text: string, id: string) => {
    edit.value = true
    editingItem.value = text
    todoItemId.value = id
}

</script>
<template>
    <div v-if="!edit" style="padding: 1% 0 1% 0;">
        <input type="checkbox" style="margin-right: 2%;">
        <label @click="show(todoItem.text, todoItem.id)">{{ todoItem.text }}</label>
        <button @click="removeItem(todoItem.id)" style="justify-content: center; margin-left: 4%;" id="btn2"> &#10060;
            Remove </button>
    </div>
    <div v-else style="align-items: center; padding: 1% 0 1% 0%;">
        <form @submit.prevent="updateItem(editingItem, todoItemId)">
            <input type="text" v-model="editingItem" @keyup.enter="updateItem(editingItem, todoItemId), closeEdit()"
                style="font-size: medium; margin-right: 2%;" />
            <button type="submit" style="margin-right: 1%;">Update</button>
            <button @click="closeEdit()">Cancel</button>
        </form>
    </div>
</template>