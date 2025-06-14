let arr = [1, 2, [3, 4], [5, [6, 7]]];

console.log(arr.flat());       
// [1, 2, 3, 4, 5, [6, 7]] (one level remove)

console.log(arr.flat(2));     
// [1, 2, 3, 4, 5, 6, 7] (two level remove)

console.log(arr.flat(Infinity));  
// all level removed  (all flat)

let num = [1,2,3]; 
let ans = num.map((v)=> [v * 2 ,String(v * 2)]); //[ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]
console.log(ans.flat());  //[ 2, '2', 4, '4', 6, '6' ]

// this way using two methods so i using one method and same work
let num2 = [1,2,3]; 
let ans2 = num2.flatMap((v)=> [v * 2 ,String(v * 2)] );
console.log(ans2); //  [ 2, '2', 4, '4', 6, '6' ]  mapping + flatteing


// basic quation using find method

let numbers = [10, 25, 60, 80, 30];
let as = numbers.find(v=>{ return v > 50});
console.log(as);


let users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 35 },
  { name: "Ravi", age: 28 }
];

let s = users.find(v=>{
    return v.age > 30
})

console.log(s);

let products = [
  { name: "Pen", inStock: true },
  { name: "Book", inStock: false },
  { name: "Bag", inStock: true }
];

let a = products.find(v=>{ return v.inStock !== true});
console.log(a);
