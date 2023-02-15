<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import { useTodo } from "@/composables/use-todo";
import type ToDo from '@/types/to-do';

const { updateTask, title } = useTodo()

const edit = ref(false);
const todoId = ref('');

defineProps({
    todoTitle: {
        type: Object as PropType<ToDo>,
        required: true
    }
})

const closeEdit = () => {
    edit.value = false
}

const show = (todoTitle: string, id: string) => {
    edit.value = true
    title.value = todoTitle
    todoId.value = id
}

</script>
<template>
    <div v-if="!edit" style="margin:3% 0 3% 0; width: 100%;">
        <label style="font-size: medium; float: left;" @click="show(todoTitle.title, todoTitle.id)">&#128204;
            {{ todoTitle.title }}
        </label>
    </div>
    <div v-else style="padding-bottom: 0; margin-bottom: 0;">
        <form @submit.prevent="updateTask(title, todoId)">
            <label>&#128204;</label>
            <input type="text" id="input3" v-model="title" style="font-size: medium;"
                @keyup.enter="updateTask(title, todoId), closeEdit()">
            <button type="submit" id="btn" @click="updateTask(title, todoId), closeEdit()">Update</button>
            <button @click="closeEdit()" id="btn">Cancel</button>
        </form>
    </div>
</template>