//conversion of value from one data type to another
//implicit type is automatically done by the js
//Explicit type coersion is done by us

//Implicit coersion


//num converted to string
var mStr = "Hello"
var mNum = "5"
var mSum = mStr + mNum

console.log(mSum)
console.log(typeof(mSum));


//bollen converted to string
console.log(true + "hola");
console.log(typeof('hola' + true));


//num converted to string
console.log(50 + "hola");
console.log(typeof('hola' + 50));

console.log('2')

//adding num operation befor string converts string to number
var mValue = +'2'
console.log(mValue)
console.log(typeof(mValue));


if(null){
    console.log("True")
}else{
    console.log("False")
}