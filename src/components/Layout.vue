<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name:'Layout'
}

</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 5px solid darkcyan;
  display: flex;
  flex-direction:column;
  height: 100vh;
}
.content{
  border: 1px solid saddlebrown;
  overflow: auto;
  flex-grow: 1;
}
</style>
