<template>
    <div class="container">

        <div class="background">
        </div>

        <div class="contents">
            <h1>Awesome text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias aperiam,
            dolorem doloremque dolorum enim explicabo in incidunt labore magnam maiores modi officia pariatur,
            praesentium qui quibusdam, repellendus rerum?
            </p>
            <starbutton main="main">Experience</starbutton>
        </div>
    </div>
</template>

<script>
import Starbutton from "@/auxiliarycomponents/starbutton";
export default {
    name: "landingpage",
    components: {Starbutton}
}
</script>

<style lang="scss" scoped>
.container{
    height: 100vh;
    width: 100vw;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .background{
        position: absolute;
        z-index: -1000;
        height: 100vh;
        width: 100vw;
        background-image: url("../../src/assets/images/landing.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        &::after{
            content: "";
            position: absolute;
            background: black;
            height: inherit;
            width: inherit;
            opacity: 0.7;
        }

    }
    .contents{
        width: 65%;
        height: 30%;
        text-align: center;
        transform: translateY(-20%);
        p{
            padding: 0 20% 0 20%;
            margin-bottom: 50px;
        }
        button{
            height: 20px;
            width: 73px;
        }
    }
}

</style>