var arr = [10, 0];
var juggle = arr[arr.length - 1];
for (var i = 0; i < arr.length; i++) {
  var temp = arr[i];
  arr[i] = juggle;
  juggle = temp;
}
console.log(arr);
