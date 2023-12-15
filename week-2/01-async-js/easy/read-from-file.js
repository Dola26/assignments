const fs = require('fs');

let path = 'a.txt';
let a=1;

const text=fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.error("Error reading the file:",err)
    }
    console.log(data)
  return 
})

for(i=0;i<1000000000;i++){
    a++;
}
console.log(text)

// text.replace(/\s/g,'');

    
// fs.writeFile(path,text,'utf-8',(err)=>{
//     if(err){
//         console.error("Error writing File:",err)
//     }
//     return;
// })