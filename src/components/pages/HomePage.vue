<script>
import axios from 'axios';
import BaseCard from '../BaseCard.vue';
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: {
        BaseCard
    },
    data: () => ({
        words: {
            data: [],
            links: []
        }
    }),
    methods: {
        async fetchWords(endpoint) {
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
        }
    },
    created() {
        // chiamo il metodo all'avvio della pagina
        this.fetchWords();
    }
};
</script>

<template>
    <div class="row">
        <BaseCard v-for="word in words.data" :key="word.id" :word="word.data" :isDetail="false" />
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