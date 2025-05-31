
// qustion is ${} inside a value to convet upper case 
// function upper(strings,...values) {
//     let res = ""
//     console.log(strings);
    
//    let uppervalue =  values.map(value=>{
//         if (typeof value === "string") {
//             return value.toUpperCase();
//         }
//         return value;
//     })
//     strings.forEach((v,i)=>{
//         res += v + (uppervalue[i] !== undefined ? uppervalue[i] : "")
//     })
//     return res;
// }


//     let finalans = upper`Hello ${name} (@${twitter}), welcome to ${topic}!` 
// console.log(finalans);




function uppper(string,...values) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if (i > 0) {
            result += String(values[i - 1]).toUpperCase();
        }        
        result += string[i];
    }
    return result;
}
var name = "tanveer",
	instagram = "m.tanveerkhilji",
	topic = "JS Recent Parts";

  let finalans = uppper `my name is ${name} and my instagram id is ${instagram} and i study in ${topic}`;
console.log(finalans);
