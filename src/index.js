const Sorter = require("./models/sorter");
const BubbleSort = require("./algorithms/sorting/bubbleSort");
const QuickSort = require("./algorithms/sorting/quickSort");
const MergeSort = require("./algorithms/sorting/mergeSort");

const sorter = new Sorter();

sorter.setSortingAlgorithm(new BubbleSort());
console.log(sorter.sort([4, 2, 1, 3]));

sorter.setSortingAlgorithm(new QuickSort());
console.log(sorter.sort([4, 2, 1, 3]));

sorter.setSortingAlgorithm(new MergeSort());
console.log(sorter.sort([4, 2, 1, 3]));
