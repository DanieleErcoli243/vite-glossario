<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">
                <h1>GLOSSARIO</h1>
            </RouterLink>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/show">Dettaglio</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact-us">Contattaci</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    box-shadow: 0 10px 10px lightgray;
}

/* lista dei link */
nav {
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 20px;

    }
}
</style>