<template>
  <button :class="`btn ${props.color}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps(['color']);
</script>

<style scoped>
.btn {
  opacity: 0.8;
  min-width: 2em;
  min-height: 2em;
  border: none;
  color: white;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.btn {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.btn:hover {
  opacity: 1;
  color: white;
}

.btn.red {
  background-color: #f44336;
}
.btn.green {
  background-color: #4CAF50;
}
</style>
