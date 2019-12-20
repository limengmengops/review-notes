<template>
    <section>
        <el-button>{{msg}}</el-button>
        <component v-if="dynamicComponent" :is="dynamicComponent"></component>
    </section>
</template>
<script>
export default {
  name:'demo',
  data() {
    return {
        msg:'hello vuepress',
        dynamicComponent: null
    }
  },
  mounted () {
    // import('./lib-that-access-window-on-import').then(module => {
    //   this.dynamicComponent = module.default
    // })
  }
}
</script>