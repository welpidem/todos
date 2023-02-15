<script setup lang="ts">
import { useTodo } from "@/composables/use-todo";
import ToDos from './todos.vue'

const { newTodo, todos, addTodo } = useTodo()

</script>

<template>
  <div id="center3">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" id="input1" required placeholder="Enter todo title...">
      <button id="btn"> &#10133;Add Todo</button>
    </form>
  </div>
  <div id="card">
    <h4 v-if="todos.length === 0">Empty Todo list.</h4>
    <ToDos />
  </div>
</template>

<style>
#center3 {
  display: block;
  margin: 0;
  text-align: center;
  width: 100%;
}

#btn {
  margin: 2%;
  padding: 2%;
  background-color: none;
  border-radius: 5px;
}

#btn2 {
  background-color: none;
  border-radius: 2px;
}

#input1 {
  width: 75%;
  padding: 2%;
}

#input2 {
  width: 65%;
  margin-top: 2%;
  padding: 2% 1% 2% 1%;
}

#input3 {
  width: 55%;
  margin-top: 2%;
  padding: 2% 1% 2% 1%;
}


#card {
  background-color: rgb(20, 121, 87);
  padding: 10%;
  width: 700px;
  border-radius: 15px;
}

#cardTD {
  background-color: hsla(160, 100%, 37%, 1);
  margin-top: 1%;
  margin-bottom: 4%;
  padding: 1%;
  border-radius: 10px;
  color: azure;
}

#cardTD:hover {
  box-shadow: 5px 7px #fff;
}

#card-item {
  float: left;
  margin-top: 2vh;
  margin-right: 10%;
}

#card-action {
  display: flex;
}

input[type=checkbox]:checked+label {
  font-style: italic;
  text-decoration: line-through;

}

#items {
  background-color: rgb(7, 73, 51);
  cursor: move;
  margin-bottom: 1%;
}

input[type="text"] {
  background: transparent;
  border: none;
  color: azure;
}
</style>