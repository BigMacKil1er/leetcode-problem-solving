// var isValid = function(s) {
//     const staples = ['()', '{}', '[]']
//     let a = s
//     for (let i = 0; i < a.length+1; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (s.indexOf(staples[j]) !== -1) {
//                 s = s.replace(staples[j], '')
//                 j--
//             }
//         }
//         if (!s) {
//             break
//         }
//     }
//     if (s) {
//         return false
//     } else return true
// };

var isValid = function(s) {
    let open = ['(', '{', '[']
    let close = [')', '}', ']']
    let count = 0
    let i = 0
    while (s) {
        let what = s.indexOf(close[i])
        console.log(what)
        while ((s.indexOf(open[i]) !== -1 && s.indexOf(close[i]) !== -1) && (((s.indexOf(close[i])+1) - (s.indexOf(open[i])+1))) % 2 !== 0) {
            if (s.indexOf(open[i]) < s.indexOf(close[i])) {
                s = s.replace(open[i], '')
                s = s.replace(close[i], '')
                count++
            } else return false
        }
        console.log(s.indexOf(open[i]), s.indexOf(close[i]), open[i], i)
        if (s.indexOf(open[i]) !== -1 || s.indexOf(close[i]) !== -1) {
            i++
        } else if (s.indexOf(open[i]) !== -1 && s.indexOf(close[i]) !== -1) {
            i++
        } else return false
    }
    return true
};




// console.log(isValid("([)]"))
// console.log(isValid("()[]{}"))
// console.log(isValid("([[]][([][])({})]())"))
// console.log(isValid("(){}}{")) // false
console.log(isValid("(([]){})")) // true