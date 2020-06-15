var arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
var key = 10;
var pivot = arrPivot(arr);
console.log(pivot);
var index = find(arr, pivot, key);
console.log(index);
function arrPivot(arr) {
  var index = 0;
  while (arr[index] < arr[index + 1]) {
    index++;
  }
  return index + 1;
}
function find(arr, pivot, key) {
  console.log(pivot);
  if (key >= arr[0]) {
    var start = 0;
    var end = pivot - 1;
  } else {
    var start = pivot;
    var end = arr.length - 1;
  }
  console.log(start + "," + end);
  while (start <= end) {
    var mid = Math.ceil((end - start) / 2) + start;
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
