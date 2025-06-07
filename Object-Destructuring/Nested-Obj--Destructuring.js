function data() {
    return {
        a:1,
        b:2,
        c:
        {
             a : 3,
            b : 3.50
        },
        d: 4

    }
}
let temp = data() || {};

let one = temp.a; // 1
let two = temp.b; // 2
let three = temp.c;  // { a: 3, b : 3.50 }
let threeOne = three.a;  // 3
let threetwo = three.b; // 3.50
let four = temp.d;  // 4
 
// easy way solve using destructuring way 

function data2() {
    return {
        a : 2,
        b :
        {
            a : 6,
            b : 8
        },
        d : 10
    }
}
let {
    a : first, //2
    b : {
        a : seconde, // 6
        b : thirid // 8
    },
    d : fourth // 10

} = data2() || {};

