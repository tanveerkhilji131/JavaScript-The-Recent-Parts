function data1(temp = {}) {
  let {
    a = 20,
    b = 40
  } = temp;

  console.log(a,b);
  
}
 data1({a : 40 , b : 50})


// easy way Destructuring diracty in paramiter 
function data2({
    a,b,c
}= {}) {
    console.log(a,b,c);
    
}

data2({a : 30 ,b : 50 , c : 20});



