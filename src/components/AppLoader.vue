<script>
export default {
    name: 'AppLoader',
    data: () => ({
        isLoading: false
    })
};
</script>

<template>
    <div class="loader-background">
        <div class="loader"></div>
    </div>

</template>

<style lang="scss" scoped>
/* loader */

.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid purple;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


.loader-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(18, 18, 18, 0.686)
}
</style>