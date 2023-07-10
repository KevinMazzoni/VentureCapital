<template>
    <div class="row">
      <div class="crumbs">
        <span class="crumbs-text"> > {{ crumbs }} </span>
      </div>
    </div>
  </template>
  
<script>
export default {
    computed: {
        crumbs() {
            return this.$route.name
        },
    },
}
</script>

<style scoped>
.crumbs {
  background-color: rgb(70, 107, 145);
  color: white;
}

.crumbs-text {
  margin-left: 5%;
}
</style>