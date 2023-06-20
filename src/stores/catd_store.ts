import { defineStore } from 'pinia'
import type { Card } from "@/models/card";
import { computed, reactive, ref } from "vue";

export const useCardStore = defineStore('card', () => {
  const cards = ref([] as Card[]);

  let id = 0;

  const cardsByDate = computed(() => cards.value.sort((a, b)=> a.date - b.date));
  function addCard(card: Card) {
    card.id = getNextId();

    cards.value.push(card);
  }

  function removeCard(id: number) {
    const index = cards.value.findIndex(item => item.id === id);

    cards.value.splice(index, 1);
  }

  function getCard(id: number) {
    return cards.value.find(item => item.id === id);
  }

  function getNextId() {
    return id++;
  }

  return { cards, cardsByDate, addCard, removeCard, getCard };
})
