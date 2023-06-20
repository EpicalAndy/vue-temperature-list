<template>
  <div class="form">
    <div class="field">
      <label for="name">Название:</label>
      <input type="text" v-model="name">
    </div>

    <div class="field">
      <label for="value">Измерение:</label>
      <input type="text" v-model="value">
    </div>

    <div class="field">
      <button @click.prevent="updateCard">Добавить</button>
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
  align-items: start;
  justify-content: space-between;
}

.field label {
  padding-right: 1em;
}

.field input {

}
</style>
