import {
  alternativeCase,
  capitalizeWords,
  reverseCase,
  sentenceCase,
  titleCase,
  updateText,
} from "../helpers/caseConverters";

function useCaseConversion(textareaValue, setTextareaValue) {
  const lowerCaseValue = () =>
    updateText(textareaValue, setTextareaValue, (value) => value.toLowerCase());

  const upperCaseValue = () =>
    updateText(textareaValue, setTextareaValue, (value) => value.toUpperCase());

  const sentenceCaseValue = () =>
    updateText(textareaValue, setTextareaValue, sentenceCase);

  const capitalizedCaseValue = () =>
    updateText(textareaValue, setTextareaValue, capitalizeWords);

  const alternativeCaseValue = () =>
    updateText(textareaValue, setTextareaValue, alternativeCase);

  const titleCaseValue = () =>
    updateText(textareaValue, setTextareaValue, titleCase);

  const reverseCaseValue = () =>
    updateText(textareaValue, setTextareaValue, reverseCase);

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
