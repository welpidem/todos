<script setup lang="ts">
  defineProps<{
  msg: string;
  }>();
</script>

<template>
  <div class="greetings">
    <h1><img src="@/assets/Todo-logo.png"  id="logo"/></h1>
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <h3>
      &#10024; Draggable to do list &#10024;
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  /* top: -10px; */
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
  width: 100%;
}

#logo{
 width: 200px;
 height: 200px;
 text-align: center;
 padding: 0;
 margin: 0;
}
</style>
