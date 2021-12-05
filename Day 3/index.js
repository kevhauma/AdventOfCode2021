const fs = require('fs');
console.time('total')
console.log(' === DAY 3 ===')

const input = fs.readFileSync('./Day 3/input.txt','utf8').split('\n').filter(Boolean)

console.time('part 1')

let rates = []
input.forEach(line=>{
    Array.from(line).forEach((bit,index)=>{
        if(!rates[index]) rates[index] = [0,0];
        rates[index][bit] += 1;
    });
});

const ratesBin = {gamma:'',epsilon:''}
 rates.forEach(rate=> {
        ratesBin.gamma += Number(rate[1] >= rate[0]),
        ratesBin.epsilon += Number(rate[1] < rate[0])
    })

    
console.log('part 1: energy consumption: ', parseInt(ratesBin.gamma,2) *parseInt(ratesBin.epsilon,2))
console.timeEnd('part 1')

//=================================================================================

console.time('part 2')

function countBitRateOfIndex(bitArray,index){
    let rate = [0,0]
    bitArray
        .map(byte=>byte.charAt(index))
        .forEach(bit=>{        
            rate[bit] += 1;
        }); 
    return rate;
}

function filterByBitCriteria(array,index, decider){
    const rate = countBitRateOfIndex(array,index)
    const num = decider(rate[0],rate[1])    
    const leftovers = []       
    array.forEach(bin=>{
        if(bin.charAt(index) == num)
            leftovers.push(bin)        
    })
    return leftovers;    
}
let gens = [...input];
let scrubs = [...input];

Array.from(input[0]).forEach((uselessVar,index)=>{
    if(gens.length > 1)
        gens = filterByBitCriteria(gens ,index, (zero,one) => Number(one >= zero))
    if(scrubs.length > 1)
        scrubs = filterByBitCriteria(scrubs, index, (zero,one) => Number(one < zero))
});

console.timeEnd('part 2')
console.log('part 2: life support:', parseInt(gens[0],2) * parseInt(scrubs[0],2))

console.timeEnd('total')

    
