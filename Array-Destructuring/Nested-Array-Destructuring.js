function Data() {
    return [1,2,[3,4]/*undefined*/,5];
}
let temp = Data() || [];

let one = temp[0]; // 1
let two = temp[1]; // 2
let temp3 = temp[2] || []; // [3,4]
let temp3One = temp3[0]; // 3
let temp3Two = temp3[1]; // 4
let four = temp[3]; // 5
console.log(one,two,temp3,temp3One,temp3Two,four); //1 2 [ 3, 4 ] 3 4 5

// this is same way using second way 

function Data2() {
    return [1,[2,3],4];
}
let values;
var [
    first,
    [
        secOne,
        secTwo,
    ]   = [],
    thred
   
] = values = Data2() || [];
console.log(first,secOne,secTwo,thred); //1 2 3 4

