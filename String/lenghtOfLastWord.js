/**
 *  Input: s = “Hello World”
    Output: 5
    The last word is “World” with length 5.

    Input: s = ” fly me to the moon “
    Output: 4
    The last word is “moon” with length 4.

    Input: s = “luffy is still joyboy”
    Output: 6
    The last word is “joyboy” with length 6.
 */
//1st Approach -  Single loop
let result = function (str) {
    let n = str.length - 1;
    count = 0;
    while(n>=0) {
        if(str[n] != ' '){
            ++count;
        }else if(count > 0) {
            break;
        }
        --n;
    }
    return count;
}


//2nd Approach - Predefined Method
let result2 = function (str) {
    str = str.trim();
    str = str.split(" ");

    return str[str.length - 1].length;
}

let str = "sanu   kumar we   ";
console.log(result2(str)); //5