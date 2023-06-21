<template>
  <div class="form">
    <div class="field">
      <label for="name">Название:</label>
      <input type="text"
             class="editor"
             v-model="name">
    </div>

    <div class="field">
      <label for="value">Измерение:</label>
      <input type="text"
             class="editor"
             v-model="value">
    </div>

    <div class="field">
      <button @click.prevent="updateCard"
              class="btn">
        Добавить
      </button>
    </div>
  </div>


</template>

<script setup lang="ts">

import { ref, Ref } from "vue";
import { useCardStore } from "@/stores/catd_store";

const name: Ref<string> = ref('');
const value: Ref<string> = ref('');
const cardStore = useCardStore();

function updateCard(ev: Event) {
  cardStore.addCard({
    id: null,
    name: name.value,
    value: value.value,
    date: (new Date()).getMilliseconds()
  });

  name.value = '';
  value.value = '';
}
</script>

<style scoped>
.field {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.field + .field {
  margin-top: 1em;
}

.field label {
  padding-right: 1em;
}

.field input {

}

.field .btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.field .btn {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.field .btn:hover {
  background-color: #3d8c40; /* Green */
  color: white;
}

.field .editor[type=text] {
  min-width: 5em;
  padding: 0.2em;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

.field .editor[type=text]:focus {
  border: 3px solid #555;
}
</style>
