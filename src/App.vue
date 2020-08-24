<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
#app{
    position: relative;
    display: flex;
    width: 100vw;
    flex-direction: column;
    font-family: $main-font;
}
</style>
