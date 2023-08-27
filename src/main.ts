import { createAuth0 } from "@auth0/auth0-vue";

import "./assets/main.css";
import authConfig from "../auth-config.json";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(
    createAuth0({
        domain: authConfig.domain,
        clientId: authConfig.clientId,
        authorizationParams: {
            redirect_uri: window.location.origin,
        }
    })
);

app.mount("#app");
