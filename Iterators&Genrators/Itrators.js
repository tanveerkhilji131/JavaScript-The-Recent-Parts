// what is itrators ?
// itrators like ka loop but this itrators follow me because itrators line by line vlaue send like a object and two value send first is value and second is done 

let arr = [100, 200, 300];
let ItrStore = arr[Symbol.iterator](); //typeof === function

let firstval1 = ItrStore.next(); // { value: 100, done: false }
let firstval2 = ItrStore.next(); // { value: 200, done: false }
let firstval3 = ItrStore.next(); // { value: 300, done: false }
let firstval = ItrStore.next(); // { value: undifind, done: true } becouse arr vlaue is empty so value : undifind and value not avilable so retern a done : true

// create it form function

function itrator(arr) {
    let increment = 0;

    return {
        next() {
            if (increment < arr.length) {

                return { value: arr[increment++], done: false };

            }
            else {
                return { done: true }
            }

        }

    }

}

let storevalue = itrator(arr);
console.log(storevalue.next());
console.log(storevalue.next());
console.log(storevalue.next());
console.log(storevalue.next());


let obj = { name: "tanveer", age: 17 };

// let vlauestore = obj[Symbol.iterator]();
// vlauestore.next() // error 

// so i am create a function and this function send a value like a itrator

function objitrator(oj) {
    let increment = 0;
    let obj = Object.values(oj);
    return {
        next() {
            if (increment < obj.length) {
                return { value: obj[increment++], done: false }

            }
            else {
                return { value: undefined, done: true }

            }
        }
    }

}
let ans = objitrator(obj);
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());

// object to convert itrator like this
let obj2 = {
  a: 1,
  b: 2,
  c: 3,

  *[Symbol.iterator]() {
    for (let key of Object.keys(obj2)) {
      yield obj2[key];
    }
  }
};
console.log([...obj2]);

let numbers = {
    *[Symbol.iterator]({start = 6, end = 30 , step = 4} = {}){ 
     for (let i = start; i <= end; i += step) {
        yield i;        
     }
    }
}


for (const v of numbers) {
   
    console.log(v);
    
}
// ourpur :
// 6
// 10
// 14
// 18
// 22
// 26
// 30
console.log(
    `my lucky number is ${
        [...numbers[Symbol.iterator](start = 0, end = 10 , step = 1)]
    }`
)
// output 
// my lucky number is 6,10,14,18,22,26,30
