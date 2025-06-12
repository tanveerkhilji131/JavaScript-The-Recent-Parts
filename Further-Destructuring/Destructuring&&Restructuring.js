// sapose i am maker a piza and defult this make 
let defult = {
    size : "medium",
    spicy : "yes",
    tamatoCachap : "yes",
    delevery : true
}
let user = {
    size : "large",
    tamatoCachap : "no",

}
let finaldata = Object.assign({},defult,user)
console.log(finaldata);
// but this way wrong because nasted array overwrite and not a marge

function margeData(
    {
        size = "medium",
        spicy = "yes",
        tamatoCachap = "yes",
        delevery = true
    } = {}
    
) {
    // restructuring way
    return {
        size,
        spicy,
        tamatoCachap,
        delevery
    }
}
let userrequired = {
    size : "half",
    spicy : "no"
}
let fullymarge = margeData(userrequired);
// this way perfect destructuring and nasted array not overwrite
console.log(fullymarge);

// extact a value in object and this value store in variable and this value called destructuring
// and diffrent diffrent variable form create a new object this called restructuring way




function Datamarge( {
   topic =  "JavaScript",
    Format =  "Live",
    slider : {
        start = 0,
        end = 100
    } 
} = {}
) 
 {

    return {
        topic,
        Format,
        slider :{
            start,end
        }
        
        
       
        
    }
    
}
let newuserData = {
    topic :"DeepJS",
    Format : "Local",
    slider : {
        start : 0,
        end : 200
    }

}
let datamarge = Datamarge(newuserData);
console.log(datamarge);
