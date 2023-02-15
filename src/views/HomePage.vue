<script setup lang="ts">
console.log("Home")
</script>

<template>
  <main>
    <div id="center">
      <h3>Medi Jem T. Manso</h3>
    </div>
  </main>
</template>

<style>
#center{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 170%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

h3 {
  animation: color-change 3s infinite;
  font-weight: bolder;
}

@keyframes color-change {
  0% { color: rgb(135, 179, 237); }
  50% { color: pink; }
  100% { color: rgb(246, 246, 88); }
}
</style>
