var myname = "tanveer";
// string staring and ending add padding(space) using padStart() and padEnd() method

// padStart add left side padding 

myname.padStart(7)    //"tanveer"

myname.padStart(10)    //"   tanveer"

myname.padStart(10, "~")   //"~~~tanveer"

myname.padStart(10, "12345") //"123tanveer"

myname.padStart(10, "|Y") //"|Y|tanveer"


// padEnd() same padStart and padend add a right side padding

myname.padEnd(7)    //"tanveer"

myname.padEnd(10)    //"tanveer   "

myname.padEnd(10, "~")   //"tanveer~~~"

myname.padEnd(10, "12345") //"tanveer123"

myname.padEnd(10, "|Y")   //"tanveer|Y|"


// how to remove string extra white space
let Str = "     tanveer       ";

Str.trim();  //"tanveer" remove all space

Str.trimStart(); //"tanveer      "

Str.trimEnd();   // "      tanveer"

