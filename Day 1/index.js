const fs = require('fs');
console.time('total')
console.log(' === DAY 1 ===')
const input = fs.readFileSync('./Day 1/input.txt','utf8').split('\n').map(Number)

let increased = 0;

console.time('part 1')
input.reduce((prev,curr)=> {
    increased += (prev < curr)
    return curr;
})
console.timeEnd('part 1')
console.log("part 1: increased:", increased)


//=====================================================================

console.time('part 2')
const windowed = input.map((depth,index)=>{
    return (depth ||0) + (input[index+1]||0) + (input[index+2]||0) 
})

increased = 0;
windowed.reduce((prev,curr)=> {
    increased += (prev < curr)
    return curr;
})
console.timeEnd('part 2')
console.log("part 2: windowed increased:", increased)
console.timeEnd('total')