
async function *genratorFun(){
    let count = 1;
    yield await new Promise((res)=>{
        setTimeout(() => {
        res(`value incremnting ${count++}`)
        }, 1000);
    })
     yield await new Promise((res)=>{
        setTimeout(() => {
        res(`value incremnting ${count++}`)
        }, 1000);
    })
     yield await new Promise((res)=>{
        setTimeout(() => {
        res(`value incremnting ${count++}`)
        }, 1000);
    })
     yield await new Promise((res)=>{
        setTimeout(() => {
        res(`value incremnting ${count++}`)
        }, 1000);
    })
     yield await new Promise((res)=>{
        setTimeout(() => {
        res(`value incremnting ${count++}`)
        }, 1000);
    })
}

async function manualCall() {
  const gen = genratorFun();

  let result1 = await gen.next(); 
  console.log(result1.value);     

  let result2 = await gen.next(); 
  console.log(result2.value);     

  let result3 = await gen.next(); 
  console.log(result3.value);   

   let result4 = await gen.next(); 
  console.log(result4.value);    

   let result5 = await gen.next(); 
  console.log(result5.value);   
  
   let resultDone = await gen.next(); 
  console.log(resultDone.done);   
}

manualCall();
