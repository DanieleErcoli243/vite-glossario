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
        <input type="email" v-model.trim="email">
        <input type="text" v-model.trim="subject">
        <textarea id="" cols="30" rows="10" v-model.trim="message"></textarea>
    </form>
</template>