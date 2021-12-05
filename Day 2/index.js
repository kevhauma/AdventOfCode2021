const fs = require('fs');
console.time('total')
console.log(' === DAY 2 ===')
const input = fs.readFileSync('./Day 2/input.txt','utf8').split('\n').map(line=>{
    const [direction,value] = line.split(' ')
    return {direction, distance: parseInt(value)}
})

console.time('part 1')
let position = {x:0,y:0}
input.forEach(move=>{
    switch(move.direction){
        case 'forward': position.x += move.distance;break;
        case 'up': position.y -= move.distance;break;
        case 'down': position.y += move.distance;break;
    }    
})
console.timeEnd('part 1')
console.log("part 1: course result:", position.x * position.y)

//=================================================================================

console.time('part 2')
position = {x:0,y:0,aim:0}
input.forEach(move=>{
    switch(move.direction){
        case 'forward': 
            position.x += move.distance;
            position.y += (position.aim * move.distance);
            break;
        case 'up': position.aim -= move.distance;break;
        case 'down': position.aim += move.distance;break;
    }    
})
console.timeEnd('part 2')
console.log("part 2: course result:", position.x * position.y)
console.timeEnd('total')