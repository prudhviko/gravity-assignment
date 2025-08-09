function twoSum(nums, target) {
  if (!Array.isArray(nums)) {
    throw new TypeError("First argument must be an array");
  }
  if (typeof target !== "number") {
    throw new TypeError("Target must be a number");
  }
  if (nums.length < 2) {
    throw new Error("Array must contain at least two numbers");
  }

  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  throw new Error("No two sum solution found");
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
