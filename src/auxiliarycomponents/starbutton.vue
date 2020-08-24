<template>
    <div>
        <button v-if="main === 'main'" class="primary hvr-sweep-to-right">
            <router-link
                class=""
                to="/engine">
                <slot></slot>
            </router-link>
        </button>
        <button v-else-if="primary" class="primary hvr-sweep-to-right">
            <slot></slot>
        </button>
        <button v-else-if="!primary" class="secondary hvr-sweep-to-right">
            <router-link to="/engine">
                <slot></slot>
            </router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: "starbutton",
    props:{
        primary:Boolean,
        main: String
    }
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
    .primary ,.main{
        height: 40px;
        width: 115px;
        background: white;
        border: none;
        color: black;
        font-size: 1rem;
        font-weight: bolder;
        font-family: $main-font;
        border-radius: 5px;
        text-decoration: none;
    }
    .secondary{
        height: 40px;
        width: 115px;
        background: none;
        border: 2px solid white;
        color: white;
        font-size: 1rem;
        font-weight: bolder;
        font-family: $main-font;
        border-radius: 5px;
    }
.hvr-sweep-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
.hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
    color: white;
}
.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}

</style>