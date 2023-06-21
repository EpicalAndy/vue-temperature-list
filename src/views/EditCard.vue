<template>
  <h2>Редактирование карточки</h2>

  <app-edit-card-component v-if="hasCard()"></app-edit-card-component>
  <div v-else>Карточки с id {{ cardId }} нет</div>
</template>

<script setup lang="ts">
import AppEditCardComponent from "@/components/AppEditCardComponent.vue";
import { useRoute } from "vue-router";
import { useCardStore } from "@/stores/catd_store";

const route = useRoute();
const cardsStore = useCardStore();
const cardId = route.params.id ? +route.params.id : null;
function hasCard(): boolean {
  return !!(cardId !== null && cardsStore.getCard(cardId));
}
</script>

<style scoped>

</style>
