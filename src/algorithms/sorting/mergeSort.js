const SortingAlgorithm = require("../../models/sortingAlgorithm");

class MergeSort extends SortingAlgorithm {
   sort(data) {
      if (data.length <= 1) {
         return data;
      }

      const middle = Math.floor(data.length / 2);
      const left = data.slice(0, middle);
      const right = data.slice(middle);

      const sortedLeft = this.sort(left);
      const sortedRight = this.sort(right);

      return this.merge(sortedLeft, sortedRight);
   }

   merge(left, right) {
      const merged = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
         if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
         } else {
            merged.push(right[rightIndex]);
            rightIndex++;
         }
      }

      return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
   }
}

module.exports = MergeSort;
