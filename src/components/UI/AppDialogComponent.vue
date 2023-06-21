<template>
  <Teleport to="body">
    <dialog ref="dialog"
            class="modal">
      <slot></slot>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps([ 'show' ]);
const _show = computed(() => props.show);
const dialog = ref(null);

onMounted(() => {
  _show.value === true ? openDialog() : closeDialog();
});

watch(_show, () => {
  _show.value === true ? openDialog() : closeDialog();
})

function openDialog() {
  dialog.value && dialog.value?.showModal();
}

function closeDialog() {
  dialog.value && dialog.value?.close();
}
</script>

<style>
.modal {
  position: absolute;
  z-index: 100;
  margin: auto;
}
.modal::backdrop {
  background: rgba(0,0,0,0.4);
}
</style>
