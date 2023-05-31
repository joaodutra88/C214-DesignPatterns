class WordCounter {
   constructor() {
      this.observers = [];
   }

   addObserver(observer) {
      this.observers.push(observer);
   }

   countWords(sentence) {
      const words = sentence.split(" ");
      const allWordsCount = words.length;
      const evenCharCountWords = words.filter(
         (word) => word.length % 2 === 0
      ).length;
      const capitalizedWordsCount = words.filter((word) =>
         /^[A-Z].*$/.test(word)
      ).length;

      this.notifyObservers(
         allWordsCount,
         evenCharCountWords,
         capitalizedWordsCount
      );

      return {
         allWordsCount,
         evenCharCountWords,
         capitalizedWordsCount,
      };
   }

   notifyObservers(allWordsCount, evenCharCountWords, capitalizedWordsCount) {
      this.observers.forEach((observer) => {
         observer.update(
            allWordsCount,
            evenCharCountWords,
            capitalizedWordsCount
         );
      });
   }
}

module.exports = WordCounter;
