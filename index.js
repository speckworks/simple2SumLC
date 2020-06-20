var twoSum = function(nums, target) {
    let indicesArray = []
    let numsMap = {}
    for(let i = 0; i < nums.length; i++){
       if(typeof(numsMap[target - nums[i]]) !== 'undefined'){
            indicesArray.push(numsMap[target - nums[i]]);
            indicesArray.push(i);
    }
                numsMap[nums[i]] = i;
    }
    return indicesArray;
};