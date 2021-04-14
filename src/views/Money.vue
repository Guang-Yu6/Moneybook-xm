<template>
  <Layout>
    最大的主页┗|｀O′|┛ 嗷~~
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import {Component} from 'vue-property-decorator';

@Component({components:{}})
export default class Home extends Vue {


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
