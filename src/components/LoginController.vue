<script setup lang="ts">
import { computed } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

import AppButton from "./AppButton.vue";
import GuardedContent from "./GuardedContent.vue";

const auth0 = useAuth0();

const isLoggedIn = auth0.isAuthenticated;

const userName = computed(() => {
    const userValue = auth0.user.value;
    return userValue?.name || userValue?.nickname || userValue?.email || "Unknown";
});

function login() {
    auth0.loginWithRedirect();
}

function logout() {
    auth0.logout({ logoutParams: {returnTo: window.location.origin}});
}

</script>

<template>
    <main class="main">
        <section v-if="!isLoggedIn">
            <AppButton @click="login">Log in</AppButton>
        </section>
        <section v-if="isLoggedIn">
            <GuardedContent :name="userName" />
        </section>
        <footer v-if="isLoggedIn">
            <AppButton @click="logout">Log out</AppButton>
        </footer>
    </main>
</template>

<style scoped>
main.main {
    display: flex;
    gap: 2em;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
}
</style>
