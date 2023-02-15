import { ref } from 'vue';
import { v4 as uuidv4 } from "uuid";
import type ToDo from '@/types/to-do';
import type ToDoItem from '@/types/to-do-items';

const todos = ref<ToDo[]>([]);


export function useTodo() {

  const editingItem = ref('');
  const title = ref('');
  const text = ref('');
  const newTodo = ref('');
  const newTodoItem = ref('');
  const todoItemId = ref('');

  function addTodo() {
    if (todos.value) {
      todos.value.push({ id: uuidv4(), title: newTodo.value, list: [] })
      newTodo.value = ''
      console.log('added main todo', todos.value)
    }
  };

  function removeTodo(id: string) {
    todos.value = todos.value.filter((t) => t.id !== id)
  };

  function updateTask(title: string, todoID: string) {
    for (const todoTitle of todos.value) {
      if (todoTitle.id === todoID) {
        todoTitle.title = title
      }
    }
  };

  //Todo Items 

  function addTodoItem(id: string) {
    for (const item of todos.value) {
      if (item.id === id) {
        item.list.push({ id: uuidv4(), text: newTodoItem.value })
        newTodoItem.value = ''
      }
    }
  };

  function removeItem(id: string) {
    for (const item of todos.value) {
      for (const list of item.list) {
        if (list.id === id) {
          item.list = item.list.filter((t) => t.id !== id)
        }
      }
    }
  };

  function updateItem(text: string, todoID: string) {
    for (const todoText of todos.value) {
      for (const Text of todoText.list) {
        if (Text.id === todoID) {
          Text.text = text
        }
      }
    }
  };

  const EditItem = (item: ToDoItem, id: string) => {
    editingItem.value = item.text
    todoItemId.value = id
    }

  return {
    newTodo,
    todos,
    title,
    text,
    todoItemId,
    editingItem,
    newTodoItem,
    EditItem,
    addTodoItem,
    addTodo,
    removeTodo,
    updateTask,
    removeItem,
    updateItem
  }
}
