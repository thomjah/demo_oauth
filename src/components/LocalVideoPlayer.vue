<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
    file: File
}>();

const videoElem = ref<HTMLImageElement | null>(null);

watch(() => props.file, (newFile) => {
    if (videoElem.value) {
        setFileToVideo(videoElem.value, newFile);
    }
}, {immediate: true});

onMounted(() => {
    if (videoElem.value) {
        setFileToVideo(videoElem.value, props.file);
    }
})

function setFileToVideo(element: HTMLImageElement, videoFile: File) {
    const objUrl = URL.createObjectURL(videoFile);
    element.src = objUrl;
    element.onload = () => {
        URL.revokeObjectURL(objUrl);
    }

}
</script>

<template>
    <video ref="videoElem"  alt="Video goes here" controls autoplay />
</template>
