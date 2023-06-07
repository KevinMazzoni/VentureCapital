<template>
<div>
    <h1>Project Page: {{ projectName }}</h1>
    <h2> Project description : {{ projectEco }}</h2>
</div>
</template>

<script lang="ts">
  export default {
    computed: {
      projectName() {
        return this.$route.query.name || 'Valore predefinito se il parametro name non è presente';
      },
      projectEco() {
        return this.$route.query.eco || 'Valore predefinito se il parametro name non è presente';
      }
    }
  };
</script>