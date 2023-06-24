<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>id</th>
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
                                @click="confirmDelete(card.id)">
            <span v-html="'&#128465;'"></span>
          </app-button-component>
        </td>
      </tr>
      </tbody>
    </table>
    <app-confirm-dialog :show="deleteDialog"
                        @confirm-action="deleteCard"
                        @cancel-action="cancelDelete">
      <template v-slot:title>Удалить</template>
      <template v-slot:body>Вы точно хотите удалить измерение?</template>
    </app-confirm-dialog>
  </div>
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
const deleteDialog = ref(false);

let deleteId: number | null = null;

function editCard(id: number) {
  router.push({ path: `/edit/${id}` })
}

function confirmDelete(id: number) {
  deleteDialog.value = true;
  deleteId = id;
}

function cancelDelete() {
  deleteDialog.value = false;
}

function deleteCard() {
  deleteId !== null && cardsStore.removeCard(deleteId);
  deleteDialog.value = false;
  deleteId = null;
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
