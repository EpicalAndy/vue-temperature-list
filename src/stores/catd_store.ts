import { defineStore } from 'pinia'
import type { Card } from "@/models/card";
import { computed, reactive, ref } from "vue";

export const useCardStore = defineStore('card', () => {
  const cards = ref([] as Card[]);


  let id = 0;

  const cardsByDate = computed(() => cards.value.sort((a, b) => {
    return b.date - a.date;
  }));

  function addCard(card: Card) {
    card.id = getNextId();

    cards.value.push(card);
  }

  function removeCard(id: number) {
    const index = cards.value.findIndex(item => item.id === id);

    cards.value.splice(index, 1);
  }

  function getCard(id: number): Card {
    return cards.value.find(item => item.id === id) as Card;
  }

  function updateCard(card: Card) {
    Object.assign(getCard(card.id), card);
  }

  function getNextId() {
    return id++;
  }

  return { cards, cardsByDate, addCard, removeCard, getCard, updateCard, };
}, {persist: true})
