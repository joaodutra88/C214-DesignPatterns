class WordCounterObserver {
   update(allWordsCount, evenCharCountWords, capitalizedWordsCount) {
      console.log("Contagem de palavras:");
      console.log(`- Total de palavras: ${allWordsCount}`);
      console.log(
         `- Palavras com quantidade par de caracteres: ${evenCharCountWords}`
      );
      console.log(
         `- Palavras começadas com maiúsculas: ${capitalizedWordsCount}`
      );
   }
}

module.exports = WordCounterObserver;
