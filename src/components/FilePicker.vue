<script setup lang="ts">
import { ref } from "vue";

import AppButton from "./AppButton.vue";

const props = defineProps<{
    fileTypes: string
}>();

const emit = defineEmits<{
    fileChange: [file: File]
}>();

const inputElem = ref<HTMLInputElement | null>(null);

function onSelectFile(event: Event) {
    inputElem.value?.click();
}

function onFileChanged(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
        const fileObj = fileInput.files[0];
        emit("fileChange", fileObj);
    }
}
</script>

<template>
    <input ref="inputElem" class="file-select" type="file" :accept="props.fileTypes" @change="onFileChanged" />
    <AppButton @click="onSelectFile">
        <slot/>
    </AppButton>
</template>

<style scoped>
input.file-select {
    display: none;
}
</style>
