var arr = [1, 2, 3, 4, 5, 6];
var sum = 8;
var left = 0;
var right = arr.length - 1;
var result = findSum(arr, left, right);
console.log(result);

function findSum(arr, left, right) {
  while (arr[left] != arr[right]) {
    testSum = arr[left] + arr[right];
    if (testSum > sum) {
      right--;
    } else if (testSum < sum) {
      left++;
    } else if (testSum == sum) {
      return left + "," + right;
    }
  }
  return "not Found";
}
