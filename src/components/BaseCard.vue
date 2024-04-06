<script>
export default {
    name: 'BaseCard',
    props: {
        words: Array
    },

}
</script>

<template>
    <div v-for="word in words" :key="word.id" class="card">
        <div class="space-between">
            <h2>{{ word.title }}</h2>
            <RouterLink to="/show">Vedi Dettaglio</RouterLink>
        </div>
        <p>{{ word.definition }}</p>
        <div>
            <ul class="tags">
                <li v-for="tag in word['tags']" :key="tag.id">
                    <RouterLink to="/show">
                        {{ tag.label }}
                    </RouterLink>
                </li>
            </ul>

        </div>
        <div v-show="word['links']">
            <ul class="links">
                <li v-for="link in word['links']" :key="link.id">
                    <RouterLink to="link.url">
                        {{ link.label }}
                    </RouterLink>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid rgb(137, 45, 137);
    padding: 10px;
    box-shadow: 10px 10px 10px goldenrod;

    border-radius: 20px;

    h2 {
        margin-bottom: 10px;
    }
}

/* lista generica */

ul {
    list-style-type: none;
    margin: 20px 0;
}

/* tag */
.tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

/* links */

.links {
    display: flex;
    align-items: center;
    justify-content: flex-end;

}
</style>