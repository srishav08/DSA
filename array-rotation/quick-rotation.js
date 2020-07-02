var arr = [1, 2, 3, 1];
var newArr = [];
var printArr = [];
let rotateBy = 3;
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
  newArr[arr.length + i] = arr[i];
}
for (i = 0; i < arr.length; i++) {
  printArr[i] = newArr[arr.length + i - rotateBy];
}
console.log(printArr);
