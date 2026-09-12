import CopyToClipboard from "react-copy-to-clipboard"
import { AiOutlineDelete } from "react-icons/ai"
import { FaRegCopy } from "react-icons/fa"
import { GoDownload } from "react-icons/go"


function TextEditorTool({ textValue, clearFn, downloadFn, copymessagefn }) {


   const lineNumber = textValue.trim().split("\n");

    console.log(lineNumber.length , "line-number")
   

    return (
        <div className="caseconverttols flex flex-wrap gap-[12px] justify-between items-center mt-5">
            <div className="flex justify-start items-center  gap-[12px]">
                {/* Clear*/}
                <button type="button" onClick={clearFn} className="tool-button"><AiOutlineDelete /></button>
                {/* Copy */}
                <CopyToClipboard
                    text={textValue}
                    onCopy={() => console.log("Text copied")}
                >
                    <button onClick={copymessagefn} className="tool-button" type="button">
                        <FaRegCopy />
                    </button>
                </CopyToClipboard>
                {/*Download */}
                <button type="button" onClick={downloadFn} className="tool-button"><GoDownload /></button>
            </div>

            <div className="counts flex justify-between items-center   gap-[12px] text-[#ffffff7a] font-light">
                 <small>Character Count :<b> {textValue.length} </b> </small> |
                 <small>Word Count : {!textValue ? "0" : textValue.trim().split(/\s+/).length } </small>|
                 <small>Line Count : {!textValue ? "0" : textValue.trim().split(/\s+/).length }  </small>
            </div>

        </div>

     
    )
}

export default TextEditorTool
