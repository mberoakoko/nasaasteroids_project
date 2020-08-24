/* eslint-disable */
const axios = require("axios");

const URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=P4S1bIV9U9KbDPLq6Bfk1JWUKIJaBjmS3r2SIjON"
function axiosFetch(url, params={}){
    return axios((
        {
            url:url,
            method: "GET",
            params: params,
        }
    )).then(res => res.data)
}

function getData(){
    return axiosFetch(URL);
}

//getData().then(data => console.log(data))
let breedObject = function (breeds){
    this.message = breeds.data.message
}
let lol;
const getBreeds = async () => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async () => {
    const breeds = await getBreeds()
    lol =  new breedObject(breeds)
    if (breeds.data.message) {
        console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
}

countBreeds()










