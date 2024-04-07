<script>
export default {
    name: 'NotFoundPage'
};
</script>

<template>
    <div class="not-found">

        <h1>404 | Page Not Found</h1>
        <button @click="$router.back()">Torna indietro</button>
    </div>
</template>

<style lang="scss" scoped>
/* contenitore del messaggio in pagina */
.not-found {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    margin-top: 20px;
}
</style>