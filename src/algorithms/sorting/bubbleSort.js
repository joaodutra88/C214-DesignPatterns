const SortingAlgorithm = require("../../models/sortingAlgorithm");

class BubbleSort extends SortingAlgorithm {
   sort(data) {
      for (let i = 0; i < data.length - 1; i++) {
         for (let j = 0; j < data.length - 1 - i; j++) {
            if (data[j] > data[j + 1]) {
               const temp = data[j];
               data[j] = data[j + 1];
               data[j + 1] = temp;
            }
         }
      }
      return data;
   }
}

module.exports = BubbleSort;
