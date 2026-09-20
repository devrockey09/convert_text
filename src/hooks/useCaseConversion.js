import {
  alternativeCase,
  capitalizeWords,
  reverseCase,
  sentenceCase,
  titleCase,
  updateChangeText,
} from "../helpers/caseConverters";

function useCaseConversion(textareaValue, setTextareaValue) {
  const lowerCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, (value) =>
      value.toLowerCase(),
    );

  const upperCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, (value) =>
      value.toUpperCase(),
    );

  const sentenceCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, sentenceCase);

  const capitalizedCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, capitalizeWords);

  const alternativeCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, alternativeCase);

  const titleCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, titleCase);

  const reverseCaseValue = () =>
    updateChangeText(textareaValue, setTextareaValue, reverseCase);

  return {
    lowerCaseValue,
    upperCaseValue,
    sentenceCaseValue,
    capitalizedCaseValue,
    alternativeCaseValue,
    titleCaseValue,
    reverseCaseValue,
  };
}

export default useCaseConversion;
