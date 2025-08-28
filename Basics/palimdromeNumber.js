//Write a program to check number is palimdrom or not

function isPalimdrome(num){
    let rev = 0;
    let rem = 0;
    let nCopy = num;
    if(num < 0) return false;

    while(num > 0){
        rem = num % 10;
        rev = (10*rev) + rem;
        num = Math.floor(num / 10);
    }

    return rev === nCopy ? true :  false;
}

console.log(isPalimdrome(1221));