<template>
<div class="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/Label">++</router-link>
  <router-link to="/Statistics">结算</router-link>
</div>
</template>

<script lang="ts">
export default {
  name:'Nav'
}
</script>

<style lang="scss" scoped>
  .nav{
      border:1px solid pink;
      display: flex;
      justify-content:space-between;
  }
</style>
