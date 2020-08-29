<template>
    <div class="container">
        <div class="canvas" style="position: absolute; "></div>
        <!--<div class="interactions"> </div>-->
    </div>
</template>

<script>
import P5 from 'p5'
import s from "../engine/Sketch"
import DataHandler from "@/engine/DataFetch";
const inStream = new DataHandler();

export default {
name: "engine",
    /**
     * @param {{orbital_data}}data
     */
    mounted() {
        inStream.init().then(result => {
            this.orbit_data= JSON.stringify(result);
            sessionStorage.setItem("orbitalData" ,  this.orbit_data)
        })

    },
    created() {

        // eslint-disable-next-line no-unused-vars

        const p5Init = ()=>{
            // eslint-disable-next-line no-unused-vars
            let canvas = new P5(s, 'canvas');
        }
        setTimeout(p5Init, 500)

    },
    data(){
    return{
        orbit_data: null
    }
    }
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
.container{
    display: flex;
    justify-content: center;
    .interactions{
        height: 80px;
        width: 400px;
        position: absolute;
        background: black;
        color: white;
        z-index: 10000;
    }
    .p5Canvas{
        position: absolute;
    }
}

</style>