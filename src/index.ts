import { readFileSync } from "fs";

type Text = string;

const countWordsInText = (text: Text): number => {
  // Remove punctuation marks and other symbols from the text.
  const textWithoutSymbols = text.replace(/[^\w\s]/g, "");

  const normalisedText = textWithoutSymbols.replace(/\s+/g, " ");

 // Split the text into words.
 const words = normalisedText.split(" ");

 // Remove any empty strings from the list of words.
 const wordsWithoutEmptyStrings = words.filter(word => word !== "");

 // Count the number of words.
 const wordCount = wordsWithoutEmptyStrings.length;

  return wordCount;
};


const main = async () => {
  if (process.argv.length !== 3) {
    console.error("Usage: count-words.js <filename>");
    process.exit(1);
  }

  const filename: string = process.argv[2];

  const text: Text = readFileSync(filename, "utf-8");
  
  const wordCount: number = countWordsInText(text);

  console.log("\n");
  console.log(`Within ${filename} there are ${wordCount} words`);
  console.log("\n");
};

main();
