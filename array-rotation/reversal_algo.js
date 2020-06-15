var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9];
var d = 1;
if (d > arr.length) {
  console.log("invalid value");
} else {
  arr = reverse(arr, 0, d);
  arr = reverse(arr, d, arr.length);
  arr = reverse(arr, 0, arr.length);
  console.log(arr);
}
function reverse(arr, start, end) {
  var iter = end - start;
  for (var i = 0; i < iter / 2; i++) {
    var temp = arr[start + i];
    arr[start + i] = arr[end - i - 1];
    arr[end - i - 1] = temp;
  }
  return arr;
}
