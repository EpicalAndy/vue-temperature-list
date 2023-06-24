<template>
  <div class="form">
    <div class="field">
      <label for="name">ID:</label>
      <input type="text"
             class="editor"
             disabled
             :value="id">
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
        {{ cardId !== null ? 'Применить' : 'Добавить' }}
      </app-button-component>
    </div>
  </div>

</template>

<script setup lang="ts">

import { ref, Ref } from "vue";
import { useCardStore } from "@/stores/catd_store";
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import { useRoute } from "vue-router";
import { Card } from "@/models/card";

const cardStore = useCardStore();
const route = useRoute();
const cardId: number | null = route.params.id ? +route.params.id : null;
const cardData: Card | null = cardId !== null ? cardStore.getCard(cardId) : null;

const id: string = cardData ? cardData.id + '' : '';
const value: Ref<string> = ref(cardData ? cardData.value : '');
const showStatus: Ref<boolean> = ref(false);

function updateCard(ev: Event) {
  if (cardId === null) {
    addCard();

    return;
  }

  _updateCard();
}

function addCard() {
  cardStore.addCard({
    id: -1,
    name: '',
    value: value.value,
    date: (new Date()).getTime()
  });

  value.value = '';
}

function _updateCard() {
  try {
    if (!cardData) {
      return;
    }
    cardData.value = value.value;

    cardStore.updateCard(cardData);

  } catch (err) {

  }
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
