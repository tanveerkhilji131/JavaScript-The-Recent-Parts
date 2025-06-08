var ol = {
    // a : {
    //     // a : 20,
    //     // b  : 30
    // }
}

let {
    a :{
        a  = 30,
        b = 40,
    } = {
        a : "empty",
        b : "empty"
    }
} = ol;
// before comment 
console.log(a,b);  // 20 30

// After comment 
console.log(a,b);  // 30 40 

// after comment all 
console.log(a,b); //empty  empty



{
    let o2 ={
    // a : {}
}
let {
   a :{
        a ,
        b ,
    } = {
        a : 30,
        b : 40
    }
} = o2;
// before comment 
console.log(a,b);   // undefined undefined
// after comment 
console.log(a,b); // 30 40


}

{
    let o3 = {};
    let {
         a :{
        a ,
        b ,
    } = {
        a : 30,
        b : 40
    }
    } = o3;

    console.log(a,b); // 30 40
    
}
