
    let obj =  {
        a : 20,
        b :{
            c :50,
            d : 30,
        },
        e : 10
    }


let {
    a,
    b :{
        c : one,
        d : two,
    },
    e
} = obj;
console.log(one); // 50
console.log(two); // 30

// Object inside array destructuring
{

let objArr = {
    a :20,
    b :[100,300],
    c : 400
}

let {
    a,
    b :[first,sec],
    c
} = objArr;
console.log(a); // 20
console.log(first); //100
console.log(sec); //300
console.log(c); // 400

}
