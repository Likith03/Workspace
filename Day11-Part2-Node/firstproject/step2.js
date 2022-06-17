let fs = require("fs");
// console.log( fs.readFileSync("temp.txt","utf-8"));

fs.readFile("temp.txt",function(error,data){
    if(error){
        console.log("Error", error )
    }
    else{
       // console.log(data);
      //  console.log(data.toString());
        console.log(data+"");
    }
})