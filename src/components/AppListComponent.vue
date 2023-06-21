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
                              @click="showEditDialog = true">
          <span v-html="'&#128394;'"></span>
        </app-button-component>
        <span>&nbsp;</span>
        <app-button-component color="red">
          <span v-html="'&#128465;'"></span>
        </app-button-component>
      </td>
    </tr>
    </tbody>
  </table>
  <app-dialog-component :show="showEditDialog">
    <span>Dialog!</span>
  </app-dialog-component>
</template>

<script setup lang="ts">
import { useCardStore } from "@/stores/catd_store";
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import { ref } from "vue";
import AppDialogComponent from "@/components/UI/AppDialogComponent.vue";

const cardsStore = useCardStore();
const showEditDialog = ref(false);
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
