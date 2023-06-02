var removeElement = function(nums, val) {
    if (nums.includes(val)){
        nums.splice(nums.indexOf(val), 1)
        return removeElement(nums, val)
    } else return nums.length
};


function di(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--;
            i--;
        }
    }
    return arr
}


// console.log(arr);
// var removeElement3 = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         nums = nums[i]
//
//     }
//     return nums
// };

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))
// console.log(removeElement2([3,2,2,3], 3))
console.log(di([3,2,2,3], 3))
console.log(di([0,1,2,2,3,0,4,2], 2))
// console.log(removeElement2([0,1,2,2,3,0,4,2], 2)) //    [0,1,4,0,3]