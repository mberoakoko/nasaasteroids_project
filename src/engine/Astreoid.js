class Asteroid{

    constructor(data, deltaT = 0, sketch) {
        this.data = data;
        this.sketch = sketch
        this.deltaT = deltaT
        this.position = null
        this.positionCache = [];
    }

    parse(){

    }
    /**
     * @param {{perihelion_distance, aphelion_distance}} data
     * @param t
     * @returns {*}
     */
    xComponent(){
        return ((this.data.perihelion_distance + this.data.aphelion_distance)/2) * Math.cos(this.deltaT);
        //return 40*Math.cos(this.deltaT)
    }
    /**
     * @param {{perihelion_distance, aphelion_distance}} I love cheese
     * @param t
     * @returns {*}
     */
    yComponent(){
        return Math.sqrt(((this.data.perihelion_distance)*(this.data.aphelion_distance)))*Math.sin(this.deltaT)
        //return -10*Math.sin(this.deltaT)
    }
    init(){
        if(this.position === null){
            this.position = this.sketch.createVector(this.xComponent(), this.yComponent())
            //console.log("The object is at ==>", this.position.x , " : ", this.position.y)
        }
    }
    move(){
        this.deltaT += 0.01
       // console.log(this.xComponent(), " : ", this.yComponent())
        let newPos = this.sketch.createVector(this.xComponent(), this.yComponent())
        this.position = newPos

    }
    render(){
        this.sketch.fill(255)
        this.sketch.ellipse(this.position.x, this.position.y, 5, 5 )
    }
   orbitalDAta(){
       for (let i = 0; i < 1000; i++) {
           this.deltaT +=1
           let newPos = this.sketch.createVector(this.xComponent(), this.yComponent())
           //console.log(this.xComponent(),  " : ", this.yComponent() )
           //this.position = this.position.add(newPos)
           this.positionCache.push(newPos)
       }
       //console.log(this.deltaT)

   }
   renderOrbit(){
       this.sketch.fill(255)
       for (let i = 0; i < this.positionCache.length; i++) {
           this.sketch.ellipse(this.positionCache[i].x, this.positionCache[i].y, 5, 5)
       }
   }
}

export default  Asteroid