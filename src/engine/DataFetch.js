/* eslint-disable */
const axios = require("axios")
let values;
let Values ;
/*let handleRequest = (
    ()=>{
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON")
            .then( response => {
                values = response.data.close_approach_data
                let  map ;
                /!*values.forEach(element =>{
                    map.push(
                        {
                            "close_approach_date": element.close_approach_date,
                            "relative_velocity": element.relative_velocity.kilometers_per_second,
                            "miss_distance":element.miss_distance.kilometers,
                            "orbiting_body":element.orbiting_body
                        }
                    )
                })*!/
                values.forEach(element =>{
                    element.relative_velocity = element.relative_velocity.kilometers_per_second;
                    element.miss_distance = element.miss_distance.kilometers
                })
                console.table(values, ["close_approach_date", "relative_velocity", "miss_distance", "orbiting_body"])
            })
        return{
            data: values
        }
    }
)();*/

class DataHandler{
    constructor() {
        this.orbit_data = null;
        this.URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON"
        this.DATA = null
        this.links = null
    }
    handleRequest(){
        let values ;
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON")
            .then( response => {
                values = response.data.close_approach_data
                let  map ;
                /*values.forEach(element =>{
                    map.push(
                        {
                            "close_approach_date": element.close_approach_date,
                            "relative_velocity": element.relative_velocity.kilometers_per_second,
                            "miss_distance":element.miss_distance.kilometers,
                            "orbiting_body":element.orbiting_body
                        }
                    )
                })*/
                values.forEach(element =>{
                    element.relative_velocity = element.relative_velocity.kilometers_per_second;
                    element.miss_distance = element.miss_distance.kilometers
                })
                console.table(values, ["close_approach_date", "relative_velocity", "miss_distance", "orbiting_body"])
            })
        return values
    }
    /**
     *@param {{ near_earth_objects, orbital_data , perihelion_distance_ aphelion_distance}} data
     * @returns Values
     */
//console.log(response.data)
    //console.log(response.data.links)
    bulkRequest(){
        return axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON").then(
            response =>{
                return response.data
            }
        ).catch( error  => console.log(error))
    }

    sendRequest = async () =>{
        try {
            this.response = await axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON")
            return this.response
        }   catch (err) {
            console.log(err)
        }
    }

    axiosFetch(url, params={}){
        return axios((
            {
                url:url,
                method: "GET",
                params: params,
            }
        )).then(res => res.data)
    }
    requestData  () {
        return this.axiosFetch(this.URL);
    }
    async init(){
        const response1 = await this.requestData();
        const parsed = await this.parseData(response1)
        return {
            word : parsed.links,
            orbitalData: parsed.orbital_data
        }
    }
    parseData(data ){
        this.DATA = data
        //console.log(this.DATA)
        const {links: _links} = this.DATA
        const {near_earth_objects: _near_earth_objects} = this.DATA
        this.orbit_data = _near_earth_objects;
        this.links = _links
        return {
            links: this.links,
            orbital_data: this.orbit_data
        }
    }
    setData(data){
        this.DATA = data
    }

}
export default DataHandler