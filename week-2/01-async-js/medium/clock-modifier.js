// setInterval(function(){
// const date = new Date();

// date.toLocaleString({
  
// })

// const hour=date.getHours();
// const minute=date.getMinutes();
// const seconds =date.getSeconds();

// console.log(`${hour}:${minute}:${seconds}`)},1000)

setInterval(()=>{
    const currentDate = new Date();

const amPmFormatted = currentDate.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
});

console.log(amPmFormatted);

},1000)