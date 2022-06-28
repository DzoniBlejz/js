// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  var twoSum = function(nums, target) {
    
// };
var twoSum = function(nums, target) {
    
    for(let i=0; i<nums.length; i++) {
        for(let b=i+1; b<nums.length; b++){
            if(nums[i] + nums[b] === target) {
                return [i, b]
            }
        }
    }
};
   

resenje = twoSum([1,2,3], 4);
console.log(resenje)