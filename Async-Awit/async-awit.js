// 1.  async function retern a promise

// async function promisedata() {
//     return "tanveer khilji"
// }
// console.log(promisedata());  //Promise { 'tanveer khilji' } 
// promisedata().then(res=> console.log(res));  // tanveer khilji

// async and awit using to hendle a promises

// let promise = new Promise((resolve,reject)=>{
//     resolve("hello wrold")
// })

// function data() {
//     promise.then(ans=> console.log(ans) )
// }
// data()

// using awit inside async function
// async function awitFun() {
//     let awitdata = await promise;
//     return awitdata
// }
// console.log(awitFun);
// and await keyword can only use async inside 


 function counter(ms) {
  return new Promise((resolve,reject)=>{setTimeout(resolve,ms)})
}
async function awitfunc(){
    for (let i = 5; i >= 1; i--) {
       console.log(i);
       await counter(1000)
       
        
    }
       console.log("Go");

}
awitfunc()
