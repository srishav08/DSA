var arr = [1, 4, 1];
var newArr = [];
var printArr = [];
var max = 0;
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
  newArr[arr.length + i] = arr[i];
}
for (var rotateBy = 1; rotateBy < arr.length; rotateBy++) {
  let hummingDist = 0;
  for (i = 0; i < arr.length; i++) {
    printArr[i] = newArr[arr.length + i - rotateBy];
    if (printArr[i] != arr[i]) {
      hummingDist++;
    }
  }
  if (hummingDist > max) {
    max = hummingDist;
  }
}
console.log(max);
