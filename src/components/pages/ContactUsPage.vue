<script>
import EmailForm from '../EmailForm.vue';
export default {
    name: 'ContactUsPage',
    components: { EmailForm }
};
</script>

<template>
    <h1>Contattaci</h1>
    <EmailForm />
</template>

<style lang="scss" scoped>
/* titolo */
h1 {
    margin-bottom: 20px;

}
</style>
