function ArrayData() {

    return ["Apply", "Banana", "Mango"];
}
// old way
let Data = ArrayData();
let First = Data[0];   // "Apply"

let Second = Data[1];  // "Banana"

let Third = Data[2];  // "Mango"

// Easy way and new

let [

    first,           // "Apply"

    second,        // "Banana"

    third       // "Mango"

] = ArrayData();

// suppose a data undefined

function ArrayData2() {

    return ["Apply", "Banana", "Mango",/*undifind */];

}
let arrdata = ArrayData2();

let o = arrdata[0]

let t = arrdata[1];

let thee = arrdata[2];

let f = arrdata[3] === undefined||null ? "Orange" : arrdata[3];

console.log( f);





let [

    one,           // "Apply"

    two,        // "Banana"

    three,    // "Mango"

     four = "watermelon",

] = ArrayData2();

console.log( four);  //watermelon
 

