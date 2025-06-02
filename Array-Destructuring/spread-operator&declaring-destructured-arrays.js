
function newData() {

    return [1, 2, 3, 4, 5, 6];

}

//   variable a store lot of data using slice method
let data = newData();

let One = data[0];

let Two = data[1];

let Three = data[2];

let Four = data.slice(2, -1); //[ 3, 4, 5 ] 

// using  spread opr
let Alldata;
let [
    fst,
    sc,
    thrd,
    ...fourth   // [ 3, 4, 5 ] 
] = Alldata = newData()
console.log(fourth);

console.log(Alldata); //[ 1, 2, 3, 4, 5, 6 ]



function data2() {

    return ["banana", "mango", "grapes", "apple"];

}
//  declare variable new old way  
let tmp = data2();
let one, two, three;
one = tmp[0];
two = tmp[1];
three = tmp[2];


//  declare variable new way 
let tmp2;
let first, seconde, thrid, four;
[
    first,
    seconde,
    thrd,
    four,
] = tmp2 = data2();

// how to store data in a  Object

function data3() {
    return [1, 2, 3, 4, 5]
}
let o = {}
let tmp3 = data3()
let First, Seconde, Thrid, Fur;

o.first = tmp3[0];
o.Seconde = tmp3[2];
o.Thrid = tmp3[3];
o.Fur = tmp3[4];

console.log(o); //{ first: 1, Seconde: 3, Thrid: 4, Fur: 5 }
[
    o.first, //1
    o.Seconde, //2
    o.Thrid, //3
    o.Fur //4
] = value= data3();

let a = [];
let tmp4 = data3();
a[3] = tmp4[0];
a[10] = tmp4[1];
a[42] = tmp4[2];
a[100] = tmp4.slice(3);

console.log(a[3]);      //  1
console.log(a[10]);  // 2
console.log(a[42]);  // 3
console.log(a[100]);  // [4,5]



let a2= []

let deta;

deta = [
    a2[3],
    a2[10],
    a2[42],
    ...a2[100]
] = data3();


console.log(a2[3]); // 3 lenght value is 1
console.log(a2[10]); // 3 lenght value is 2
console.log(a2[42]); // 42 lenght value is 3
console.log(a2[100]); // 42 lenght value is [4,5]

