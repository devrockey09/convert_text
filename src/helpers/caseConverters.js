const capitalizeWords = (value) =>
  value
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word ? `${word.charAt(0).toUpperCase()}${word.slice(1)}` : word,
    )
    .join(" ");

const titleCaseOmitWords = [
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "nor",
  "for",
  "yet",
  "so",
  "at",
  "by",
  "in",
  "of",
  "on",
  "to",
  "up",
  "as",
];

const titleCase = (value) => {
  const words = value.toLowerCase().split(" ");

  return words
    .map((word, index) => {
      const wordValue = word.replace(/[^a-z0-9]/gi, "");
      const shouldCapitalize =
        index === 0 || !titleCaseOmitWords.includes(wordValue);

      return shouldCapitalize
        ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        : word;
    })
    .join(" ");
};

const sentenceCase = (value) =>
  value
    .split(".")
    .map((sentence) => {
      const trimmedSentence = sentence.trim();
      if (!trimmedSentence) return sentence;

      return `${trimmedSentence.charAt(0).toUpperCase()}${trimmedSentence
        .slice(1)
        .toLowerCase()}`;
    })
    .join(". ");

const alternativeCase = (value) =>
  value
    .split("")
    .map((character, index) =>
      index % 2 === 0 ? character.toUpperCase() : character.toLowerCase(),
    )
    .join("");

const reverseCase = (value) =>
  value
    .split("")
    .map((character) => {
      const isLetter = character.toLowerCase() !== character.toUpperCase();
      if (!isLetter) return character;

      const isUppercase = character === character.toUpperCase();
      return isUppercase ? character.toLowerCase() : character.toUpperCase();
    })
    .join("");

const updateText = (textareaValue, setTextareaValue, transform) =>
  setTextareaValue(transform(textareaValue));

export {
  alternativeCase,
  capitalizeWords,
  reverseCase,
  sentenceCase,
  titleCase,
  updateText,
};
