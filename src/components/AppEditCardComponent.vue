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
      <app-button-component @click.prevent="updateCard"
                            color="green">
        {{ cardId !== null ? 'Редактировать' : 'Добавить' }}
      </app-button-component>
    </div>
  </div>


</template>

<script setup lang="ts">

import { ref, Ref } from "vue";
import { useCardStore } from "@/stores/catd_store";
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import { useRoute } from "vue-router";

const cardStore = useCardStore();
const route = useRoute();
const cardId = route.params.id ? +route.params.id : null;
const cardData = cardId !== null && cardStore.getCard(cardId);

const name: Ref<string> = ref(cardData ? cardData.name : '');
const value: Ref<string> = ref(cardData ? cardData.value : '');

function updateCard(ev: Event) {
  if (cardId === null) {
    addCard();

    return;
  }

  _updateCard();
}

function addCard() {
  cardStore.addCard({
    id: null,
    name: name.value,
    value: value.value,
    date: (new Date()).getMilliseconds()
  });

  name.value = '';
  value.value = '';
}

function _updateCard() {
  cardData.name = name.value;
  cardData.value = value.value;

  cardData && cardStore.updateCard(cardData);
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
