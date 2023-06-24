<template>
  <app-dialog-component :show="show">
    <div class="confirm-dialog">

      <div class="confirm-header confirm-item">
        <h3 class="confirm-title">
          <slot name="title"></slot>
        </h3>
        <a href="#close" title="Close" class="close">×</a>
      </div>

      <div class="confirm-body confirm-item">
        <slot name="body"></slot>
      </div>

      <div class="confirm-footer confirm-item">
        <app-button-component color="green"
                              @click="confirmAction">
          Подтвердить
        </app-button-component>
        <app-button-component color="red"
                              @click="cancelAction">
          Отменить
        </app-button-component>
      </div>

    </div>
  </app-dialog-component>
</template>

<script setup lang="ts">
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import AppDialogComponent from "@/components/UI/AppDialogComponent.vue";
import { ref } from "vue";

const show = ref(false);
const emits = defineEmits([ 'confirm-action', 'cancel-action' ]);


function confirmAction() {
  emits('confirm-action');
}

function cancelAction() {
  emits('cancel-action');
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
