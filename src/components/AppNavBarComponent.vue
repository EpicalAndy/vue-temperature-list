<template>
  <nav class="nav-bar">
    <ul>
      <li><router-link to="/">Список температур</router-link></li>
      <li><router-link to="/add">Добавить измерение</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav-bar {
  width: 100%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
