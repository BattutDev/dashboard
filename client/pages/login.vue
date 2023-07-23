<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input id="mail" type="text" placeholder="email" value="toto@mail.com" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mot de passe</span>
                    </label>
                    <input id="password" type="password" placeholder="Mot de passe" value="toto" class="input input-bordered" />
                </div>

                <div class="form-control mt-6">
                    <button v-if="isLogging" class="btn loading opacity-70">Identification</button>
                    <button v-else @click="login" class="btn btn-primary">S'identifier</button>

                </div>


            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import {useAlertsStore} from "~/stores/alerts";

definePageMeta({
    middleware: async function (to, from) {
        if (process.server) return;

        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = "/";
            return;
        }
    },
});

const isLogging = ref(false);

const store = useAlertsStore()
const {add, timeout} = store

const login = ref(async () => {


    const mail = document.querySelector<HTMLInputElement>("#mail");
    const password = document.querySelector<HTMLInputElement>("#password");

    if (mail && password) {

        if (!mail.value || !password.value) {

            add({
                type: 'error',
                text: 'Veuillez renseigner un mail et/ou un mot de passe'
            })

        } else {

            isLogging.value = true;

            try {
                const response = await fetch(import.meta.env.VITE_API_URL + "/login", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        mail: mail.value,
                        password: password.value,
                    }),
                });

                const data = await response.json();

                console.log(data);

                if (response.status !== 200) {
                    isLogging.value = false;
                    add({
                        type: 'error',
                        text: 'Identifiants incorrects'
                    })
                    return;
                } else {
                    localStorage.setItem("token", data.token);
                    console.log(8, localStorage.getItem("token"));
                    return navigateTo("/");
                }
            } catch (error) {
                console.log(error);
                add({
                    type: 'error',
                    text: 'Erreur DEV, regardez la console'
                })
            }


        }
    } else {
        add({
            type: 'error',
            text: 'Une erreur est survenue, veuillez recharger la page'
        })
    }

})
</script>
