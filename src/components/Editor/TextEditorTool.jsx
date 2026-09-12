import { AiOutlineDelete } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

function TextEditorTool({ clearFn, downloadFn, copyFn }) {
  return (
    <div className="caseconverttols flex flex-wrap gap-[12px] justify-start items-center mt-5">
      {/* Clear*/}
      <button type="button" onClick={clearFn} className="tool-button">
        <AiOutlineDelete />
      </button>
      {/* Copy */}
      <button onClick={copyFn} className="tool-button" type="button">
        <FaRegCopy />
      </button>
      {/*Download */}
      <button type="button" onClick={downloadFn} className="tool-button">
        <GoDownload />
      </button>
    </div>
  );
}

export default TextEditorTool;
