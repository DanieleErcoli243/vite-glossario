<script>
import axios from 'axios';
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    data: () => ({
        words: []
    }),
    methods: {
        async fetchWords() {
            try {
                // raccolgo i dati dal database
                const { data } = await axios.get(baseUri);
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio array vuoto
                this.words = data;
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
    <h1>Pagina Iniziale</h1>
</template>