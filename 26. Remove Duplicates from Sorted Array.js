// var removeDuplicates = function(nums) {
//     let uniq = new Set
//     for (let i = 0; i < nums.length; i++) {
//         if(!uniq.has(nums[i])){
//             uniq.add(nums[i])
//         }
//     }
//
//     return uniq.size
// };

var removeDuplicates = function(nums) {
    let counter = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] !== nums[i]){
            nums[counter] = nums[i]
            counter++
        }
    }
    return counter
};

// var removeDuplicates = function(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i-1] == nums[i]){
//             nums.splice(i,1)
//             i--
//         }
//     }
//     return nums.length
// };


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
