//Coercing of an object from one type of class to another



//converting of any object to string
var mNum = 15
console.log(typeof(String(mNum)))
console.log(typeof(String(true)))
console.log(typeof(String(651)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))



//converting of any object to Number
console.log(typeof(Number("5")))
console.log(Number(true), typeof(Number(true)))
console.log(Number(false), typeof(Number(true)))
console.log(Number("+65555"), typeof(Number("+65555")))
console.log(Number("apple"), typeof(Number("apple")))
//NaN not a number is always a number type


//to boolean type
console.log(Boolean(1), typeof(Boolean(1)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean("Apple"), typeof(Boolean("Apple")))
console.log(Boolean(null), typeof(Boolean(null)))
//null == undefined and empty string i.e ""

