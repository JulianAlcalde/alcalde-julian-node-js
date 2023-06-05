const prompt=require("prompt-sync")();


function sumArray(arr, num) {
    let left = 0;
    let right = arr.length - 1;
      
    while (left < right) {
        let sum = arr[left] + arr[right];
      
        if (sum === num) {
            return true;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }
      
    return false;
}

console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 13)); // true
console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14)); // false