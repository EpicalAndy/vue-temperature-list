<template>
  <app-dialog-component :show="true">

    <div class="confirm-dialog">
      <div class="confirm-header confirm-item">
        <h3 class="confirm-title">{{ text.confirm.title }}</h3>
        <a href="#close" title="Close" class="close">×</a>
      </div>
      <div class="confirm-body confirm-item">
        <p>{{ text.confirm.description }}</p>
      </div>
      <div class="confirm-footer confirm-item">
        <app-button-component color="green"
                              @click="confirm">
          Подтвердить
        </app-button-component>
        <app-button-component color="red"
                              @click="cancel">
          Отменить
        </app-button-component>
      </div>
    </div>

  </app-dialog-component>
</template>

<script setup lang="ts">
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import AppDialogComponent from "@/components/UI/AppDialogComponent.vue";

const text = {
  cancel: {
    title: 'Отмена изменений', description: 'Отменить изменения?'
  },
  confirm: {
    title: 'Сохранить изменения', description: 'Сохранить внесённые изменения?'
  }
}
const emits = defineEmits([ 'confirm', 'cancel' ]);

function confirm() {
  emits('confirm');
}

function cancel() {
  emits('cancel');
}
</script>

<style scoped>
.confirm-header,
.confirm-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.confirm-item + .confirm-item {
  margin-top: 1em;
}
</style>
