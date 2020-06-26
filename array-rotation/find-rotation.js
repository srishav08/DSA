var arr = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, -1, 0, 1, 2, 3, 4, 5];
var pivot = findPivot(arr);
console.log(arr[pivot]);

function findPivot(arr) {
  var start = 0;
  var end = arr.length - 1;
  var mid = ~~((end - start) / 2);
  while (end >= start) {
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[start]) {
      end = mid;

      mid = start + ~~((end - start) / 2);
    } else {
      start = mid;
      mid = start + ~~((end - start) / 2);
    }
  }
}
