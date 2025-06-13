let arr = [
    { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: NaN }
]

let ans = arr.find(function match(v) {
    return v && v.a > 3;
})
console.log(ans); // {a : 4}

let ans2 = arr.find(function match(v) {
    return v && v.a > 5
})
console.log(ans2); // undifined

let ans3 = arr.findIndex(function match(v) {
    return v && v.a === 2
})
console.log(ans3); // 1 becouse index arr inside index 1 and value 2 so retern a index 1

// and findindex vlaue not exist so retern -1 

console.log(arr.indexOf(NaN)); // error becouse indexof not handaled NaN

let arr2 = [10, 20, 30, NaN, 40, 50, 60, 70, 80, 90, 100];

  arr2.includes(10) //true

  arr2.includes(101) //false

  arr2.includes(10 , 0) // true  includes(value,Searchindex)

  arr2.includes(NaN,3) // true 

  arr2.includes( NaN ) // true
