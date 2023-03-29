// var romanToInt = function(s) {
//     let sum = 0
//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case 'I':
//                 if(s[i+1] === 'V') {
//                     sum+=4
//                 }else if(s[i+1] === 'X') {
//                     sum+=9
//                 } else {
//                     sum+=1
//                 }
//                 break
//             case 'V':
//                 if(s[i-1] === 'I'){
//                     continue
//                 } else {
//                     sum+=5
//                 }
//                 break
//             case 'X':
//                 if(s[i-1] === 'I'){
//                     continue
//                 }else if(s[i+1] === 'L'){
//                     sum+=40
//                 }else if(s[i+1] === 'C'){
//                     sum+=90
//                 } else {
//                     sum+=10
//                 }
//                 break
//             case 'L':
//                 if(s[i-1] === 'X'){
//                     continue
//                 } else {
//                     sum+=50
//                 }
//                 break
//             case 'C':
//                 if(s[i-1] === 'X'){
//                     continue
//                 } else if(s[i+1] === 'D'){
//                     sum+=400
//                 } else if(s[i+1] === 'M'){
//                     sum+=900
//                 } else {
//                     sum+=100
//                 }
//                 break
//             case 'D':
//                 if(s[i-1] === 'C'){
//                     continue
//                 } else {
//                     sum+=500
//                 }
//                 break
//             case 'M':
//                 if(s[i-1] === 'C'){
//                     continue
//                 } else {
//                     sum+=1000
//                 }
//                 break
//         }
//     }
//     return sum
// };


// var romanToInt = function(s) {
//     let counter = 0
//     let point = 0
//     let len = s
//     for (let i = 0; i < len.length; i++) {
//         if(s.indexOf('IV') !== -1) {
//             counter+=4
//             point = s.indexOf('IV')
//             s = s.replace('IV', '')
//         } else if(s.indexOf('IX') !== -1) {
//             counter+=9
//             point = s.indexOf('IX')
//             s = s.replace('IX', '')
//         } else if(s.indexOf('XL') !== -1) {
//             counter+=40
//             point = s.indexOf('XL')
//             s = s.replace('XL', '')
//         } else if(s.indexOf('XC') !== -1) {
//             counter+=90
//             point = s.indexOf('XC')
//             s = s.replace('XC', '')
//         } else if(s.indexOf('CD') !== -1) {
//             counter+=400
//             point = s.indexOf('CD')
//             s = s.replace('CD', '')
//         } else if(s.indexOf('CM') !== -1) {
//             counter+=900
//             point = s.indexOf('CM')
//             s = s.replace('CM', '')
//         } else break
//     }
//     for (let i = 0; i < len.length; i++) {
//         if (s[0] === 'I') {
//             counter+=1
//             s = s.replace('I', '')
//         } else if (s[0] === 'V') {
//             counter+=5
//             s = s.replace('V', '')
//         } else if (s[0] === 'X') {
//             counter+=10
//             s = s.replace('X', '')
//         } else if (s[0] === 'L') {
//             counter+=50
//             s = s.replace('L', '')
//         } else if (s[0] === 'C') {
//             counter+=100
//             s = s.replace('C', '')
//         } else if (s[0] === 'D') {
//             counter+=500
//             s = s.replace('D', '')
//         } else if (s[0] === 'M') {
//             counter+=1000
//             s = s.replace('M', '')
//         }
//     }
//     return counter
// };

let roman = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
let romanToInt = function(s) {
    let masObj = Object.keys(roman)
    let count = 0
    for (let i = 0; i < s.length+1; i++) {
        for (let i = 0; i < masObj.length; i++) {
            if(s.indexOf(masObj[i]) !== -1) {
                s = s.replace(masObj[i], '')
                count = count + Object.values(roman)[i]
            }
        }
    }
    if (s.length === 1) {
        count+= roman[s]
    }
    return count
};
// console.log(Object.keys(roman))
console.log(romanToInt('MDCCCLXXXIV'))
// console.log(romanToInt("MCMXCIV")) // 1994