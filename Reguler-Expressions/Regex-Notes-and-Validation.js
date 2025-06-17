// litlers : 1,2,3,4,5.... and a,b,c,d,... and A,B,C... this is a litlers
// metacharacters : chraters special meaning like a " ^ " and " $ " this two uniqe characters using starting and ending (start of string) to use "^" and (end of string) to use "$" for exp = ^tanveer$
// character classes  : for exp user take a input only for small characters so i am using this [a - z] how its work this work is only put a smallest characters for exmple ^[A - Za - z0 - 9]$ output is only one digit and small and big letter user take a input a so output is a and user take a A so output is A user take a 5 so output is 5
// quantifiers : this use to one and more data includes condition using like "+" (one or more) or "*" (Zero or more times) "{1,3}" exp =  [A - Za - z0 - 9]+$ output a a to z and A to z or 0 to 9 vlaues send all
// {1,5} output is tanvee 
// and not using this [a - z] this way wrong way becuse space also count so use this [a-z] perfect

// starting to all pattern explain 
// baisc syntex of regex  / ... /
// ^ this is starting point and $ this is end point
// + this is a one and one more exp = /\d+/  and output = "11" true "111" true minimum one and maximum more than
// * this is zero and one more exp = /\d*/ output =  "" true , "1" menimum zero and maximum more than
// ? It will work even if both the conditions do not match exp = /colou?r/ output color true and colour is true
// $ this is a end point a my patten complete so last added this this is repersent end with ragulerexprestion
// shot pattern
// [A - Za - z0 - 9] === \w
//  [0-9] === \d but only one digit like this 0 true 0123 false fix this using + /\d+/ = 12345 true
//  {} this using condition bas like a only mobile number add  = /^\d{0,10}$/ == 1234567890 true
//  /i = case insensitive match exp = /abc/i.test("ABC") true
//  /g = global match  exp = let a = 'tanveer friend name a tanveer'  a.replace(/tanveer/g,"TANVEER") output same but name is capital letter
//  /m = multiline this is main perpuse ^ and $ end line iffect like this str = "hello tk"  /tk$/.test(str) output = false using this /tk$/m output true becouse this pettern find starting and ending so value is true
//  \.,$,&,*,% = this using spical charcters in includes string so using this /^\.tk/ output = .tk true ..tk false

// built a email validation
let a = /^[a-zA-Z]+\d{2,4}?@[a-z]+\.[a-zA-Z]{2,3}$/
let str = "tanveer972@gmail.com";
let ans = a.test(str);
console.log(ans); //true

// make a indian phone number and include starting 91+

let number =/^[9][1][+]\d{10}$/
let usernum = "91+8824729998";
let ans2 = number.test(usernum);
console.log(ans2);


