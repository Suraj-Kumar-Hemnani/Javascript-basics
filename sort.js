function sortCustom(arr) {
  // Read through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Compare each element with the rest of the elements in the array
      if (arr[j] <= arr[i]) {
        // If the element is less than the previous element, swap them
        [arr[i], arr[j]] = swapIt(arr[i], arr[j]);
      }
    }
  }
  // Time Complexity: O(n^2);
  // Space Complexity: O(1);
  // Finally, return the sorted array
  return arr;
}

function swapIt(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

let array = [0, 1, 2, 0, 1, 2, 0, 1, 2];
document.write(sortCustom(array));
