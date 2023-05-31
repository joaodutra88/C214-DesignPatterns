const Sorter = require("./models/sorter");
const BubbleSort = require("./algorithms/sorting/bubbleSort");
const QuickSort = require("./algorithms/sorting/quickSort");
const MergeSort = require("./algorithms/sorting/mergeSort");
const WordCounter = require("./observers/wordCounter");
const WordCounterObserver = require("./observers/wordCounterObserver");

console.log("Iniciando o programa...");

const sorter = new Sorter();
const wordCounter = new WordCounter();
const observer = new WordCounterObserver();

const sentence =
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu odio vel diam viverra finibus. Mauris vitae volutpat sem. Aliquam auctor elit sed dui efficitur auctor. Donec feugiat efficitur turpis, id lacinia turpis vestibulum sit amet. Pellentesque venenatis arcu vel feugiat tincidunt. Sed vestibulum libero sit amet libero eleifend, nec venenatis risus imperdiet. Nullam accumsan sapien id metus ultricies rhoncus. Curabitur vehicula lacus non pulvinar placerat. In sit amet nunc vitae magna scelerisque sollicitudin ac vel urna. Sed suscipit urna ac risus pulvinar tincidunt. Fusce nec mi augue. Etiam in diam non velit vulputate cursus. Quisque tristique, nisi ac finibus aliquet, felis sapien pulvinar lectus, eget convallis est arcu eu metus. Sed sed dolor non nunc venenatis finibus. Sed ac nunc in mauris laoreet facilisis. Integer congue consequat ante, eu congue mauris congue eget.";

wordCounter.addObserver(observer);
console.log("Contando palavras...");
wordCounter.countWords(sentence);

sorter.setSortingAlgorithm(new BubbleSort());
const sortedBubble = sorter.sort([4, 2, 1, 3]);
console.log("Resultado da ordenação: ", sortedBubble);

sorter.setSortingAlgorithm(new QuickSort());
const sortedQuick = sorter.sort([4, 2, 1, 3]);
console.log("Resultado da ordenação: ", sortedQuick);

sorter.setSortingAlgorithm(new MergeSort());
const sortedMerge = sorter.sort([4, 2, 1, 3]);
console.log("Resultado da ordenação: ", sortedMerge);

console.log("\nPrograma concluído.");
