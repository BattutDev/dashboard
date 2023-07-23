<template>

  <div class="h-full p-10">
      <div @click="logout" class="btn btn-active btn-sm  btn-wide flex gap-2">
          <LogOut class="text-red-500"/>
          <span>Se déconnecter</span>
      </div>
  </div>

</template>

<script setup lang="ts">

import {LogOut} from 'lucide-vue-next'
import {ref} from 'vue'

const logout = ref(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/";
        localStorage.clear();
        return;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    try {
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/users/logout",
            {
                method: "post",
                headers,
                credentials: "include",
            }
        );

        console.log(response?.status);

        localStorage.clear();
        window.location.href = "/login";
        return;
    } catch (e) {
        console.log(e);
    }
})



</script>