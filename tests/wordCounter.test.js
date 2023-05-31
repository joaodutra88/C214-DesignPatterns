const WordCounter = require("../src/observers/wordCounter");

describe("WordCounter", () => {
   let wordCounter;

   beforeEach(() => {
      wordCounter = new WordCounter();
   });

   test("Contagem de palavras em uma frase simples", () => {
      const sentence = "Essa é uma frase de teste";
      const wordCount = wordCounter.countWords(sentence);
      expect(wordCount.allWordsCount).toEqual(6);
   });

   test("Contagem de palavras em uma frase vazia", () => {
      const sentence = "";
      const wordCount = wordCounter.countWords(sentence);
      expect(wordCount.allWordsCount).toEqual(1);
   });

   test("Contagem de palavras em uma frase com pontuação", () => {
      const sentence =
         "Esta é uma frase com pontuação, que será contada corretamente!";
      const wordCount = wordCounter.countWords(sentence);
      expect(wordCount.allWordsCount).toEqual(10);
   });

   test("Contagem de palavras em uma frase longa", () => {
      const sentence =
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu odio vel diam viverra finibus. Mauris vitae volutpat sem.";
      const wordCount = wordCounter.countWords(sentence);
      expect(wordCount.allWordsCount).toEqual(19);
   });
});
