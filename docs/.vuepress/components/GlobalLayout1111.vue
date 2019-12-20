<!-- themePath/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout" >
    <!-- <header><h1>Header1111</h1></header> -->
    <component :is="layout"/>
    <!-- <footer><h1>Footer11</h1></footer> -->
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        console.log(111);
        return 'Layout'
        // return 'Footer'
      }
      return 'NotFound'
    }
  }
}
</script>