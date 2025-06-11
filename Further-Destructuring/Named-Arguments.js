// old style postional argument
function data(store,id) {

    console.log(store,id);

}
// problem
// yaad rakhna padhtha hai paramiter ko 
// ager bul gaye order to galta ho janga
data("hello",22) 

// solution named arguemnt  object ka through
function namedData({store , id}) {
    console.log(store,id);
    
}
namedData({id : 22 , store : "hello"});  // store = "hello" ,id = 22 
