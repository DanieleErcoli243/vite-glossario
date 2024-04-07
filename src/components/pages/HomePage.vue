<script>
import axios from 'axios';
import BaseCard from '../BaseCard.vue';
import BasePagination from '../BasePagination.vue'
import { store } from '../../data/store.js'
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: {
        BaseCard, BasePagination
    },
    data: () => ({
        words: null,
        store
    }),
    methods: {
        async fetchWords(endpoint) {
            if (!endpoint) endpoint = baseUri;
            store.isLoading = true;
            try {
                // raccolgo i dati dal database
                const { data } = await axios.get(baseUri);
                // stampo i risultati in console

                // riassegno i dati al mio array vuoto
                this.words = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            store.isLoading = false;
        }
    },
    created() {
        // chiamo il metodo all'avvio della pagina
        this.fetchWords();
    }
};
</script>

<template>

    <div v-if="!store.isLoading" class="row">
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