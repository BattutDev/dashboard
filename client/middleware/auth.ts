export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/login";
        return;
    }
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const response = await fetch(import.meta.env.VITE_API_URL + "/users/@me", {
        method: "get",
        headers,
        credentials: "include",
    });

    if (response?.status !== 200) {
        localStorage.clear();
        window.location.href = "/login";
        return;
    }

    const data = await response.json();

    console.log(data);

    localStorage.setItem("user", JSON.stringify(data));
});
