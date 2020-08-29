/* eslint-disable */
import Asteroid from "@/engine/Astreoid";
import BinaryTree from "@/engine/BinaryTree";
//import DataHandler from "@/engine/DataFetch";
const s = ( sketch ) => {
    let AsteroidArray = []
    let w = 700;
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



    /*let TEST_DATA = generateData(6000)
    console.log(TEST_DATA)
    let PLANETOIDS = []
    for (let i = 0; i < TEST_DATA.length; i++) {
        PLANETOIDS.push(
            new Asteroid(TEST_DATA[i], getRandomInt(-1000, 1000), sketch)
        )
    }*/
    // This is where I would want to do the API calls

    let  rawData = sessionStorage.getItem("orbitalData")
    let parsedData = JSON.parse(rawData)
    let orbitalArray = [];
    let tree = new BinaryTree();
    const { orbitalData: _orbitalData } = parsedData
    for(const {orbital_data:
        {
            aphelion_distance: _aphelion_distance,
            perihelion_distance: _perihelion_distance,
            semi_major_axis: _semi_major_axis,
            perihelion_time: _perihelion_time
        }} of _orbitalData ){
        let _dataPoint = {
            aphelion_distance: parseFloat(_aphelion_distance) *100,
            perihelion_distance: parseFloat(_perihelion_distance) * 100,
            semi_major_axis: parseFloat(_semi_major_axis),
            //perihelion_time: new Date(parseFloat(_perihelion_time) * 1000),
            perihelion_time: parseFloat(_perihelion_time),

            object_initialPosition: {
                x_value: ((_perihelion_distance + _aphelion_distance)/2)*Math.cos(0.002),
                y_value:(_perihelion_distance*_aphelion_distance)*Math.sin(0.002)
            }
        }
        tree.insertData(_dataPoint)

    }

    //console.log(tree)
    /*let date = new Date(2458900.539291811604 * 1000);
    console.log(date.toUTCString())*/

    /**
     * Calculates the position of the Asteroid given time
     */
    let calcPosition = (perihelionDistance, aphelionDistance, deltaT)=>{
        return  sketch.createVector(
            ((perihelionDistance + aphelionDistance)/2)*Math.cos((deltaT)),
            (perihelionDistance*aphelionDistance)*Math.sin(deltaT)
        )
    }
    /**
     * In order traversal of the Tree
     * @param node
     */
    let previousTime = 0.0001;

    function inOrder(node){
        if(node !== null){
            inOrder(node.left)
            let deltaT = node.data.perihelion_time - previousTime
            previousTime = node.data.perihelion_time
            let newAsteroid = new Asteroid(node.data, deltaT, sketch)
            newAsteroid.position = calcPosition(node.data.perihelion_distance, node.data.aphelion_distance, deltaT)
            AsteroidArray.push(newAsteroid)
            inOrder(node.right)
        }
    }

    /**
     * Initialises my Asteroid array making sure each of them have the appropriate
     * position initialized
     */
    let init = ()=>{

    }
    inOrder(tree.root)
    console.log(AsteroidArray)
    let Alpha = new Asteroid(data,0 ,  sketch);
    sketch.setup = () => {
        sketch.createCanvas(w, h);


        Alpha.init()
       // Alpha.orbitalDAta()
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
        /*for (let i = 0; i < PLANETOIDS.length; i++) {
            //PLANETOIDS[i].renderOrbit()
            PLANETOIDS[i].move()
            PLANETOIDS[i].render()
        }*/
        for (let i = 0; i < AsteroidArray.length; i++) {
            AsteroidArray[i].move()
            AsteroidArray[i].render()
        }

    };
};

export default s
