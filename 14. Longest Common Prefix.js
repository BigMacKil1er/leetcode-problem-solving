// var longestCommonPrefix = function(strs) {
//     strs = strs.sort()
//     let i = 1
//     let findPrefix = strs[0]
//     while (i < strs.length) {
//         if (!strs[i].startsWith(findPrefix)) {
//             findPrefix = findPrefix.slice(0, -1)
//         } else {
//             i++
//         }
//     }
//     return findPrefix
// };







var longestCommonPrefix = function(strs) {
    strs = strs.sort()
    let i = 1
    let findPrefix = strs[0]
    while (i < strs.length) {
        if (!strs[i].startsWith(findPrefix)) {
            findPrefix = findPrefix.slice(0, -1)
        } else i++

    }
    return findPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["dog","racogar","cardogan"]))