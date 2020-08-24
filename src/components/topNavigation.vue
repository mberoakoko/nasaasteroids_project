<template>
    <div class="header">
        <nav>
            <ul>
                <li v-for="item in header_items" :key="item.title">
                    <a :href="item.link">{{item.title}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
name: "topNavigation",
    data(){
        return{
            header_items:[
                {
                    title: "Home",
                    link:"#"
                },
                {
                    title: "Explore",
                    link:"#"
                },
                {
                    title: "News",
                    link:"#"
                },
                {
                    title: "About Us",
                    link:"#"
                },
                {
                    title: "Contact Us",
                    link:"#"
                } ]
        }
    }

}
</script>

<style lang="scss"  scoped>
@import "src/scss/main";
.header {
    width: 100%;
    position: relative;

    nav {
        margin-left: 40%;

        ul {
            height: 50px;
            overflow: hidden;
            li {
                display: inline-block;
                line-height: 50px;
                a {
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                    text-align: center;
                    font-size: 1.4rem;
                    padding: 30px;
                    &:before{
                        content: "";
                        position: relative;
                        background: black;
                        z-index: -1;
                        top:0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        transform: scaleY(0);
                        transform-origin: 50% 1000%;
                        transition-property: transform;
                        transition-duration: 0.3s;
                        transition-timing-function: ease-out;
                        &:hover {
                            color: white;
                        }
                    }

                }
            }
        }
    }
}
</style>