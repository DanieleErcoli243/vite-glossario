<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav>
            <h1>GLOSSARIO</h1>
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