var mCar = {
    "p1": "350 kmph",
    "gallardo": "320 kmph",
    "veyron" : "409 kmph",
    "agera" : "429 kmph",
}

console.log(mCar)
console.log(typeof(mCar))
//An object is a collection of key values with the enclosed curly brackets

var mAgera = {
    name: "Agera",
    manufacture: {
        name: "Koenigsegg",
        location: "Sweden",
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBracks: function(){
        setTimeout(function(){
            console.log('Car Stopped');
        }, 5000)
    }
}

console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.manufacture.name)//returns a value fron ogject
console.log(mAgera.manufacture.location)//returns a value from object
console.log(mAgera.applyBracks())
