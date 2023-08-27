<script setup lang="ts">
import { ref } from "vue";
import FilePicker from "./FilePicker.vue";
import LocalVideoPlayer from "./LocalVideoPlayer.vue";
import AppButton from "./AppButton.vue";

const props = defineProps<{
    name: string
}>();

const videoFile = ref<File | null>(null);

function onFilePicked(fileObj: File) {
    videoFile.value = fileObj;
}

function removeVideo() {
    videoFile.value = null;
}

</script>

<template>
    <div class="content">
        <header>Welcome, {{ $props.name }}</header>
        <section>
            <FilePicker file-types="video/*" @file-change="onFilePicked">Choose a Video file</FilePicker>
        </section>
        <section v-if="videoFile !== null">
            <LocalVideoPlayer :file="videoFile" />
        </section>
        <section v-if="videoFile !== null">
            <AppButton @click="removeVideo">Remove Video</AppButton>
        </section>
    </div>
</template>

<style scoped>
div.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}
</style>
