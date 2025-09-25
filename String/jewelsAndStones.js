/**
 * You’re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is different from "A".

Example:
Input: jewels = “aA”, stones = “aAAbbbb”
Output: 3

Input: jewels = “z”, stones = “ZZ”
Output: 0
 */

let jewelsAndStones = function(jewels,stones){
    let jSet = new Set();
    for(let i=0; i<jewels.length;i++){
        jSet.add(jewels[i]);
    }

    let count =  0
    for(let j=0; j<stones.length; j++){
        if(jSet.has(stones[j])){
            ++count;
        }
    }

    return count;
}

let jewels = "aA";
let stones = "aAbbbab";

console.log(jewelsAndStones(jewels,stones));