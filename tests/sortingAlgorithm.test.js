const Sorter = require("../src/models/sorter");
const BubbleSort = require("../src/algorithms/sorting/bubbleSort");
const QuickSort = require("../src/algorithms/sorting/quickSort");
const MergeSort = require("../src/algorithms/sorting/mergeSort");

describe("Sorter", () => {
   let sorter;

   beforeEach(() => {
      sorter = new Sorter();
   });

   test("Bubble Sort - Ordenação crescente", () => {
      sorter.setSortingAlgorithm(new BubbleSort());
      const sorted = sorter.sort([1, 2, 3, 4]);
      expect(sorted).toEqual([1, 2, 3, 4]);
   });

   test("Quick Sort - Ordenação decrescente", () => {
      sorter.setSortingAlgorithm(new QuickSort());
      const sorted = sorter.sort([4, 3, 2, 1]);
      expect(sorted).toEqual([1, 2, 3, 4]);
   });

   test("Merge Sort - Lista vazia", () => {
      sorter.setSortingAlgorithm(new MergeSort());
      const sorted = sorter.sort([]);
      expect(sorted).toEqual([]);
   });

   test("Bubble Sort - Ordenação aleatória", () => {
      sorter.setSortingAlgorithm(new BubbleSort());
      const sorted = sorter.sort([7, 2, 5, 1, 4, 3, 6]);
      expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7]);
   });
});
