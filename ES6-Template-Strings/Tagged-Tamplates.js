let myName = "tanveer";
let age = 17;
function taggedFun(string,...values) {
    console.log(string); // retern a outside value like this [ 'my name is ', ' and my age is ', '' ]
    console.log(values); // retern a ${} inside value like this  [ 'tanveer', 17 ]
}
 taggedFun `my name is ${myName} and my age is ${age}`;




