function Data() {
    return { a: 1 /*undefined */, b: 2, c: 3, d: 4, e: 5 };
}
let temp = Data();
let one = temp.a !== undefined ? temp.c : "emptyValue";     // 1
let two = temp.b;   // 2
let three = temp.c;   // 3
console.log(one);

// using destructuring way 
let {
    a: first = "emptyValue", // 1
    b: second, // 2
    c: thrird, // 3
    ...rest //{ d: 4, e: 5 }
} = Data();

console.log(first);



function data() {
    return { a: "tanveer", b: 17, c: "coding" }
}
let newData;
let {
    a: firstName,
    b: age,
    c: work
} = newData = data()

console.log(firstName, age, work); // tanveer 17 coding


