<template>
  <div>
    <div>
    这是结算页面知道了
    </div>
    <Nav/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import {Component} from 'vue-property-decorator';
@Component({components:{Nav}})
export default class Statistics extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
