var arr = [1, 2, 3, 4, 5];
var d = 3;
//outer loop to rotate the elemets d times
for (j = 0; j < d; j++) {
  //rotate the array once by continuous swapping with the last element
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
}
console.log(arr);
