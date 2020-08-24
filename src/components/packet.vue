<template>
    <div class="container">
        <top-navigation></top-navigation>
        <landingpage></landingpage>
    </div>
</template>

<script>
import Landingpage from "@/components/landingpage";
import TopNavigation from "@/components/topNavigation";
export default {
name: "packet",
    components: {TopNavigation, Landingpage}
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
.container{
    position: relative;
    display: flex;
    width: 100vw;
    flex-direction: column;
    font-family: $main-font;
}

</style>