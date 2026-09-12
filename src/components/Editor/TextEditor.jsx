import Button from "../common/Button";
import { useEffect, useState } from "react";
import TextEditorTool from "./TextEditorTool";
import useCaseConversion from "../../hooks/useCaseConversion";
import downloadText from "../../helpers/textActions";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import useLocalStorage from "../../hooks/useLocalStorage";

function TextEditor() {
  const { storedValue: textareaValue, setStoredValue: setTextareaValue } =
    useLocalStorage("convert-case-text", "");
  const [message, setMessage] = useState("");
  const copyToClipboard = useCopyToClipboard();

  const {
    lowerCaseValue,
    upperCaseValue,
    sentenceCaseValue,
    capitalizedCaseValue,
    alternativeCaseValue,
    titleCaseValue,
    reverseCaseValue,
  } = useCaseConversion(textareaValue, setTextareaValue);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  // clear function
  const clearFn = () => {
    setMessage("Text cleared successfully");
    setTextareaValue("");
  };

  const copyText = async () => {
    const result = await copyToClipboard(textareaValue);
    setMessage(
      result.success
        ? "Text copied successfully"
        : `Copy failed: ${result.error}`,
    );
  };

  return (
    <>
      <div className="text-editor-wraper rounded-xl border border-solid border-[#a16333] py-[25px] px-[20px] bg-[#191412]">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <textarea
            className="w-full h-[250px] bg-[#191412] outline-0  text-white"
            placeholder="Type or pest your content here"
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
          />
          {textareaValue.length > 0 && (
            <div className="show-message-blk relative">
              <p className="absolute bottom-[10px] px-5 py-4  bg-[#3d2920] text-white rounded">
                {message}
              </p>
            </div>
          )}

          <TextEditorTool
            clearFn={clearFn}
            copyFn={copyText}
            downloadFn={() => downloadText(textareaValue, setMessage)}
          />
          <div className="text-editor-tools-blk  p-2  rounded-[10px] mt-5 flex flex-wrap gap-[12px] justify-center items-center ">
            <Button
              onClick={sentenceCaseValue}
              className={"common-btn"}
              strongText={"Sc"}
              text={"Sentence case"}
            />
            <Button
              onClick={lowerCaseValue}
              className={"common-btn"}
              strongText={"lc"}
              text={"lower case"}
            />
            <Button
              onClick={upperCaseValue}
              className={"common-btn"}
              strongText={"UC"}
              text={"UPPER CASE"}
            />
            <Button
              onClick={capitalizedCaseValue}
              className={"common-btn"}
              strongText={"CC"}
              text={"Capitalized Case"}
            />
            <Button
              onClick={alternativeCaseValue}
              className={"common-btn"}
              strongText={"aC"}
              text={"aLtErNaTiNg cAsE"}
            />
            <Button
              onClick={titleCaseValue}
              className={"common-btn"}
              strongText={"TC"}
              text={"Title Case"}
            />
            <Button
              onClick={reverseCaseValue}
              className={"common-btn"}
              strongText={"iC"}
              text={"InVeRsE CaSe"}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default TextEditor;
