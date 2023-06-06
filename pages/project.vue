<template>
<div>
    <h1>Project Page: {{ projectName }}</h1>
</div>
</template>

<script lang="ts">

export default {
  get projectName(): any {
    return this.$route.params.name;
  }
}
</script>