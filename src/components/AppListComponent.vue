<template>
  <table class="table">
    <thead>
    <tr>
      <th>Название</th>
      <th>Значение</th>
      <th>Действия</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="card in cardsStore.cards">
      <td>{{ card.name }}</td>
      <td>{{ card.value }}</td>
      <td>
        <app-button-component color="green"
                              @click="editCard(card.id)">
          <span v-html="'&#128394;'"></span>
        </app-button-component>
        <span>&nbsp;</span>
        <app-button-component color="red"
        @click="deleteCard(card.id)">
          <span v-html="'&#128465;'"></span>
        </app-button-component>
      </td>
    </tr>
    </tbody>
  </table>
  <app-confirm-dialog></app-confirm-dialog>
</template>

<script setup lang="ts">
import { useCardStore } from "@/stores/catd_store";
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import { ref } from "vue";
import AppDialogComponent from "@/components/UI/AppDialogComponent.vue";
import AppConfirmDialog from "@/components/AppConfirmDialog.vue";
import router from "@/router";

const cardsStore = useCardStore();
const showEditDialog = ref(false);

function editCard(id: number) {
  router.push({ path: `/edit/${id}` })
}

function deleteCard(id: number) {
  cardsStore.removeCard(id);
}
</script>

<style scoped>
.table {
  border: none;
}

.table td,
.table th {
  background-color: transparent;
  padding: 10px;
  border-right: solid 0 transparent;
}

.table th {
  border-bottom: solid 1px steelblue;
}
</style>
