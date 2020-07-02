// rearrange such that a[i]=i else a[i]=-1
var arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
var obj = {};
for (var i = 0; i < arr.length; i++) {
  obj[arr[i]] = i;
}
for (var i = 0; i < arr.length; i++) {
  if (i in obj) {
    arr[i] = i;
  } else {
    arr[i] = -1;
  }
}
console.log(arr);
