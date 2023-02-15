
<template>
	<ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink :to="{ name: 'Todos' }">Todo List</RouterLink></li>
    </ul>
</template>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 2000;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: flex;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>