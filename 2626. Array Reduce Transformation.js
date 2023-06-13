var reduce = function(nums, fn, init) {
    let arr = init
    for (let i = 0; i < nums.length; i++) {
        arr = fn(arr, nums[i])
    }
    return arr
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0))
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100))
