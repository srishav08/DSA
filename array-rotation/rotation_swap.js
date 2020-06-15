var arr = [1, 2, 3, 4, 5];
for (j = 0; j < 3; j++) {
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
}
console.log(arr);
