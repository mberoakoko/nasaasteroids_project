<template>
    <div class="container">
        <div class="canvas" style="position: absolute; "></div>
        <!--<div class="interactions"> </div>-->
    </div>
</template>

<script>
import P5 from 'p5'
import s from "../engine/Sketch"
//import DataHandler from "@/engine/DataFetch";
//const inStream = new DataHandler();
export default {
name: "engine",
    mounted() {
     /*  inStream.sendRequest().then(result =>{
            this.orbit_data = result.data
           console.log(this.orbit_data)
           const  {links: _links}  = this.orbit_data
           const {near_earth_objects : _near_earth_objects } = this.orbit_data
           console.log(" This is links ", _links)
           console.log("Near earth Objects => ", _near_earth_objects)
        })*/

    },
    created() {
        // eslint-disable-next-line no-unused-vars
       let canvas = new P5(s, 'canvas');
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