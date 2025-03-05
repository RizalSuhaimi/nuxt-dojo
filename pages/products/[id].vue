<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illo nemo reiciendis harum totam! Perferendis nostrum aliquid ducimus dolore quaerat!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>