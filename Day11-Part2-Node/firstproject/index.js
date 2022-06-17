let fs = require("fs");
/*fs.writeFileSync("data.txt","welcome to your life");
console.log("file is created");*/

fs.writeFileSync("data.txt","welcome to your life,there's no turning back","utf-8",function(error){
    if(error){console.log("Error",error)}
   else{ console.log("file is created")}
})
