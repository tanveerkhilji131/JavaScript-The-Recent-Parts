function asyncItrator(max){
  let incrementCount = 1;
  return{
    async next(){
     return new Promise(res=>{
        setTimeout(()=>{
          if(incrementCount <= max){
            res({value : incrementCount++ , done : false})
          }else{
            res({value : undefined , done : true})
          }
        },1000)
      })
    }
  }
}

let itrator = asyncItrator(5);

async function userClick() {
  let res = await itrator.next();
  console.log(res);

  
}


userClick();
userClick();
userClick();
userClick();
userClick();
