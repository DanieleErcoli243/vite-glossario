<script>
import axios from 'axios';
import BaseCard from '../BaseCard.vue';
import BasePagination from '../BasePagination.vue'
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: {
        BaseCard, BasePagination
    },
    data: () => ({
        words: {
            data: [],
            links: []
        },
        isLoading: false
    }),
    methods: {
        async fetchWords(endpoint) {
            this.isLoading = true;
            if (!endpoint) endpoint = baseUri;
            try {
                // raccolgo i dati dal database
                const { data, links } = await axios.get(baseUri);
                // stampo i risultati in console
                console.log(data, links);
                // riassegno i dati al mio array vuoto
                this.words = { data, links };
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            this.isLoading = false;
        }
    },
    created() {
        // chiamo il metodo all'avvio della pagina
        this.fetchWords();
    }
};
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div v-else class="row">
        <BaseCard v-for="word in words.data" :key="word.id" :word="word.data" :isDetail="false" />
        <BasePagination :links="words.links" @close="fetchWords(words.links.url)" />
    </div>

</template>


<style lang="scss" scoped>
/* riga */

.row {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>