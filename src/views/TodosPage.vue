<script setup lang="ts">
import {useTodo} from '@/composables/use-todo'
import HeaderTitle from "../components/header-title.vue";
import TodoList from "../components/todo-list.vue";
console.log("TodoListView")

const {todos} = useTodo()
</script>

<template>
  <header>
  </header>
  <br />
  <br />
  <br />
  
  <HeaderTitle msg=" &#9997; To Do List" />
  <div id="center2"><TodoList/></div>
  

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  ul,li{
    text-decoration: none;
  }
  th{
    padding-right: 10%;
  }
}

#center2{
  margin: 0;
  z-index: 10;
  text-align: center;
}
</style>
