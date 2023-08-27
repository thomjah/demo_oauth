<script setup lang="ts">

</script>

<template>
    <button class="app-btn">
        <slot>Click Me</slot>
    </button>
</template>

<style scoped>
button.app-btn {
    background-color: rgb(99,93,255);
    color: white;
    padding: 1em 3em;
    border-style: none;
    border-radius: 0.5em;
    cursor: pointer;
    font-weight: 600;
}
button.app-btn:hover {
    box-shadow: 0 0 0.25em 0.25em rgba(99,93,255, 0.33);
}
</style>
