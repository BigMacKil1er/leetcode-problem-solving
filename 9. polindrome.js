// let isPalindrome = function(x) {
//     let a = String(x).split('')
//     let y = a.slice(0).reverse().join('')
//     if(a.join('') === y) {
//         return true
//     } else return false
// };

var isPalindrome = function(x) {
    let num = 0
    let a = x
    let copyNum = []
    if(x < 0) {
        return false
    } else {
        for (let i = 0; i < String(x).length; i++) {
            if(!(a / 10 < 0)) {
                num = a % 10
                a = (a - (a % 10)) / 10
                copyNum.push(num)
            } else {
                copyNum.push(a)
            }
        }
        return x === +copyNum.join('')
    }
};

console.log(isPalindrome(232))
