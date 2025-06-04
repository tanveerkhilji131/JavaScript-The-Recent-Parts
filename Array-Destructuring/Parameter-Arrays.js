
function data(){
    return null;
}

// let temp = data() ;
// let one = temp[0];
// console.log(one); // typeError 

// error handling use this

let temp = data() || [] ;
let one = temp[0];
console.log(one); // undefined

// same way using desturturing way 
function data() {
    return null
}
// let value;
// let [
//     first,
//     seconde,
//     three,
// ] = value = data();

// console.log(first); typeError

let value;
let [
    first,
    seconde,
    three,
] = value = data() || [];
console.log(first); // undefined

// this is better way use this


function Data(temp = []) {
    let [
        one = 10,
        two = 20,
        three = 30,
    ] = temp;
    console.log(one,two, three);
        
}

Data() // 10 20 30
// this way using Sturucturing way 
function Data2([
    one = 10,
    two = 20,
    three = 40
] = []) {
    console.log(one,two , three);
    
}
Data2(); // 10 20 40
