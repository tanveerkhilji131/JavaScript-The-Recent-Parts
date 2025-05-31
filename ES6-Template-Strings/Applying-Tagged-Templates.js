function upper(strings, ...values) {
    let res = "";

    // Convert each value to uppercase if it's a string
    let uppervalue = values.map(value => {
        if (typeof value === "string") {
            return value.toUpperCase();
        }
        return value;
    });

    // Merge strings and uppercase values
    strings.forEach((v, i) => {
        res += v + (uppervalue[i] !== undefined ? uppervalue[i] : "");
    });

    return res;
}

var name = "tanveer",
    instagram = "m.tanveerkhilji",
    topic = "JS Recent Parts";

// Use custom tag function
let finalans1 = upper`Hello ${name} (@${instagram}), welcome to ${topic}!`
console.log(finalans1);

//seconde way to solve
function uppper(string, ...values) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        if (i > 0) {
            // Add uppercase version of the value
            result += String(values[i - 1]).toUpperCase();
        }
        // Add the string part
        result += string[i];
    }

    return result;
}

var name = "tanveer",
    instagram = "m.tanveerkhilji",
    topic = "JS Recent Parts";

let finalans2 = uppper`my name is ${name} and my instagram id is ${instagram} and i study in ${topic}`;
console.log(finalans2);


//thrid way to solve
function format(strings, ...values) {
  return strings.reduce((result, str, i) => {
 const val = values[i] !== undefined ? values[i] : "";
return result + str + val.toUpperCase(); // Make values uppercase
  }, "");
}

const product = "laptop";
const price = "700";

const finalans3 = format `The product is ${product} and it costs $${price}.`;

console.log(finalans3);
