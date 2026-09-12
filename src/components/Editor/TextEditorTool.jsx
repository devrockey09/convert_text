import CopyToClipboard from "react-copy-to-clipboard"
import { AiOutlineDelete } from "react-icons/ai"
import { FaRegCopy } from "react-icons/fa"
import { GoDownload } from "react-icons/go"


function TextEditorTool({ textValue, clearFn ,downloadFn ,copymessagefn }) {




    return (
        <div className="caseconverttols flex flex-wrap gap-[12px] justify-start items-center mt-5">
            {/* Clear*/}
            <button type="button" onClick={clearFn} className="tool-button"><AiOutlineDelete /></button>
            {/* Copy */}
            <CopyToClipboard
                text={textValue}
                onCopy={() => console.log("Text copied")}
            >
                <button onClick={copymessagefn}  className="tool-button" type="button">
                    <FaRegCopy />
                </button>
            </CopyToClipboard>
            {/*Download */}
            <button type="button" onClick={downloadFn} className="tool-button"><GoDownload /></button>
        </div>
    )
}

export default TextEditorTool
