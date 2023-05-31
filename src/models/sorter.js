class Sorter {
   constructor() {
      this.sortingAlgorithm = null;
   }

   setSortingAlgorithm(algorithm) {
      this.sortingAlgorithm = algorithm;
   }

   sort(data) {
      if (!this.sortingAlgorithm) {
         throw new Error("Algoritmo de ordenação não definido");
      }

      console.log(`Ordenando usando ${this.sortingAlgorithm.constructor.name}`);
      return this.sortingAlgorithm.sort(data);
   }
}

module.exports = Sorter;
