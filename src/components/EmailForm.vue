<script>
export default {
    name: 'EmailForm',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
        }
    })
};
</script>

<template>

    <form @submit.prevent>
        <label for="email">Inserisi il tuo indirizzo e-mail</label>
        <input type="email" id="email" v-model.trim="email">
        <label for="subject">Inserisci l'oggetto</label>
        <input type="text" id="subject" v-model.trim="subject">
        <label for="message">Il tuo messaggio</label>
        <textarea id="message" cols="30" rows="10" v-model.trim="message"></textarea>
        <button type="submit">Invia</button>
    </form>
</template>

<style lang="scss" scoped>
/* modulo */
input {
    display: inline-block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
}

textarea {
    width: 100%;
    margin: 10px 0;
}

button {
    padding: 5px 10px;
    border-radius: 10px;
    background-color: rgb(193, 66, 212);
    color: white;

}
</style>