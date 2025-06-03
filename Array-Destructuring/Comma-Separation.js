
function Deta() {
    return [1,2,3,4,5];
}


// Wrong way confusing
let [first , ,thrid, ,...fourth] = Deta();
console.log(first,thrid,fourth);

// Better way:

let temp;   
var [
    one,
    ,
    three,
    ,
    ...four
] = temp = Deta();

console.log(four);

// swaping two variable 

let x = 10;
let y = 20;

{
    let temp = x;  //temp = 10
    x = y    // x = 20 becouse y = 20 so x value set a 20
    y = temp;  // temp set a value y = 10 becouse line 30 temp = 10
    console.log(x);
}

// this way solve destructuring
let num1 = 10 ,num2 = 20;
[num1,num2] = [num2,num1];
console.log(num1); //20
console.log(num2); //10

