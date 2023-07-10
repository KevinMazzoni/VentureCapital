<template>
    <TheHeader />
    <Breadcrumbs class="mt-2 mb-2"></Breadcrumbs>
    <div class="slot">
        <slot />
    </div>
    <TheFooter />
</template>

<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue';
</script>