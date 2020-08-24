import Asteroid from "@/engine/Astreoid";
//import DataHandler from "@/engine/DataFetch";
const s = ( sketch ) => {

    let w = window.innerWidth;
    let h = window.innerHeight
    let data = {
        perihelion_distance: 150,
        aphelion_distance: 50
    }
    class Data{
        constructor(x, y ) {
            this.perihelion_distance = x
            this.aphelion_distance = y
        }
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    let generateData = (size)=>{
        let dataCache = [];
        for (let i = 0; i < size; i++) {
            dataCache.push(new Data(
                getRandomInt(300, 0),
                getRandomInt(500, 1600)
            ))
        }
        return dataCache
    }
    let TEST_DATA = generateData(6000)
    console.log(TEST_DATA)
    let PLANETOIDS = []
    for (let i = 0; i < TEST_DATA.length; i++) {
        PLANETOIDS.push(
            new Asteroid(TEST_DATA[i], getRandomInt(-1000, 1000), sketch)
        )
    }
    // This is where I would want to do the API calls



    let Alpha = new Asteroid(data,0 ,  sketch);
    sketch.setup = () => {
        sketch.createCanvas(w, h);


        Alpha.init()
        Alpha.orbitalDAta()
        for (let i = 0; i < PLANETOIDS.length; i++) {
            PLANETOIDS[i].init
            PLANETOIDS[i].orbitalDAta()
        }
    };

    sketch.draw = () => {
        sketch.background(33, 33, 33);
        sketch.translate(w/2, h/2)
        sketch.fill(255);
        sketch.noStroke()
        sketch.ellipse(0, 0 , 20,20)
        //Alpha.renderOrbit()
        Alpha.move()
        Alpha.render()
        for (let i = 0; i < PLANETOIDS.length; i++) {
            //PLANETOIDS[i].renderOrbit()
            PLANETOIDS[i].move()
            PLANETOIDS[i].render()
        }
    };
};

export default s
