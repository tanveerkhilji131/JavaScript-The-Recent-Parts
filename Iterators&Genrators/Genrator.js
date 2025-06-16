// what is genrator ?
// genrator same like a itrators but this genrator using in function and function name starting point add (*) so function to convert a gernrator for exmple

function *genratorFun() {
    console.log("hello1");
    console.log("hello2");
    console.log("hello3");
    console.log("hello4");
    
}
let fun = genratorFun();
fun.next();
// hello1
// hello2
// hello3
// hello4

// and second way use to output formate like a itrators 

function *genratFun() {
    yield "hello world"
    yield "hello world two"
    yield "hello world three"
    
}
let Fn = genratFun();
console.log(Fn.next());  //{ value: 'hello world', done: false }
console.log(Fn.next());  //{ value: 'hello world two', done: false }
console.log(Fn.next());  //{ value: 'hello world three', done: false }
console.log(Fn.next());  //{ value: undefined, done: true }

console.log([...genratFun()]);  //  [ 'hello world', 'hello world two', 'hello world three' ]
