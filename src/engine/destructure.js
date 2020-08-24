/* eslint-disable */
/*const testObject = {
    id: 1235,
    data: {
        name: "otoyo",
        surname:"otos",
        interests : {
            hobby: "sex",
            dicksize: "massive"
        }
    }
}
const testListObjects = [
    {
        id: 1235,
        data: {
            name: "otoyo",
            surname:"otos",
            interests : {
                hobby: "eating out",
                something: "massive"
            }
        }
    },
    {
        id: 1235,
        data: {
            name: "opiyo",
            surname:"otos",
            interests : {
                hobby: "coding",
                something: "else"
            }
        }
    },{
        id: 1235,
        data: {
            name: "mbero",
            surname:"Martin",
            interests : {
                hobby: "coding ",
                something: "other than this "
            }
        }
    }
];
function  DestructuredObject (id, data ){
    this.id = id;
    this.data = data
}
let newList  = []
for (const {id: _id, data: {interests: _interests}} of testListObjects){
    newList.push(new DestructuredObject(_id, _interests))
}
let objDest =  ({data})=>{
    return data
}
let {id: lol} = testObject
console.log(lol)
let {data: { name : _name}} = testObject
let{data : {interests: { hobby : _hobby}}} = testObject
console.log(_name)
console.log(_hobby)
console.log(newList[0])*/


class Destructure{
    constructor(data) {
        this.data = JSON.parse(data)
    }
    root({data}){
        return data
    }

    display(){
        console.log(this.data)
    }
    nearEarthObjects(){
    let {near_earth_objects: _near_earth_objects} = this.data
        return _near_earth_objects
    }
    destLinks(){
        const {links: _links} = this.data
        return _links
    }
}


export default Destructure






























