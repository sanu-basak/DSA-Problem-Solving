/**
 * Example:
Input: words = [“leet”, “code”], x = “e”
Output: [0, 1]

Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “a”
Output: [0, 2]

Input: words = [“abc”, “bcd”, “aaaa”, “cbc”], x = “z”
 */

let result = function(arr,x){
    let res = [];
    for (let i = 0; i < arr.length ; i++){
        // console.log(arr[i].includes(x));
        let n = arr[i].length;
        while(n >= 0){
            if(arr[i][n] == x){
                res.push(i);
                break;
            }
            --n;
        }
    }
    return res;
}
let arr = ["abc", "bcd", "aaaa", "cbc"]
console.log(result(arr,'b'));