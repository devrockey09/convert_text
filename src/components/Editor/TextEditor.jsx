import { useForm } from "react-hook-form"
import Button from "../common/Button"
import { useEffect, useState } from "react"
import { saveAs } from "file-saver";
import TextEditorTool from "./TextEditorTool";

function TextEditor() {

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const textareaValue = watch("textareaValue", "")


  const [message , setMessage] = useState("")

  const [storageValue , setStorageValue] = useState({
      storeValue : localStorage.getItem("textareaValue");
      getValue : JSON.parse("textareaValue")
  })

  useEffect(() => {
    if (message) {
     setTimeout(() => {
        setMessage("");
      }, 2000);}},[message]);


  useEffect(() => {
    localStorage.setItem(
      "textareaValue",
      JSON.stringify(textareaValue)
    );
  }, [textareaValue]);


  useEffect(() => {
    const storeValue = localStorage.getItem("textareaValue");

    if (storeValue) {
      setValue("textareaValue", JSON.parse(storeValue));
    }
  }, [setValue]);



  // ===== Lower case Text Converter =====
  const lowerCaseValue = () => {
    const lowerCase = textareaValue.toLowerCase()
    return (
      setValue("textareaValue", lowerCase)
    )
  }

  // ===== Upper case Text Converter =====
  const upperCaseValue = () => {
    const lowerCase = textareaValue.toUpperCase()
    return (
      setValue("textareaValue", lowerCase)
    )
  }


  // ===== Sentance case Text Converter =====
  const sentanceCaseValue = () => {
      const splitWord = textareaValue.split(".");
      const sentancecasemap = splitWord.map((item) => {
      const firstletter = item[0].toUpperCase();
      const remainingletters = item.slice(1).toLowerCase();

      return (firstletter + remainingletters)
    })

    const margesentance = sentancecasemap.join(".")

    return (
      setValue("textareaValue", margesentance)

    )
  }


  // ===== Capitalize case Text Converter =====
  const capitalizedCaseValue = () => {
    const splitWord = textareaValue.split(" ");

    const capSplitWord = splitWord.map((item) => {
      const firstletter = item[0].toUpperCase();
      const reaminingLetters = item.slice(1).toLowerCase();
      return (firstletter + reaminingLetters)
    })

    const joinlatter = capSplitWord.join(" ")

    return (
      setValue("textareaValue", joinlatter)
    )
  }


  // clear function
  const clearFn = () => {
     setMessage("Text cleared successfully");
    return (
      setValue("textareaValue", "")
    )
  }


  //  text download function 
const downloadText = () => {
  if (!textareaValue) return;

  const blob = new Blob([textareaValue], {
    type: "text/plain;charset=utf-8",
  });
  
  saveAs(blob, "my-text.txt");
  setMessage("Text downloaded successfully");
};

  // Copy message function 
const copymessage = () => {
  setMessage("Text copied successfully");
}



  return (
    <>
      <div className="text-editor-wraper rounded-xl border border-solid border-[#a16333] py-[25px] px-[20px] bg-[#191412]">
        <form onSubmit={(e) => e.preventDefault()} className="w-full">

          <textarea className="w-full h-[250px] bg-[#191412] outline-0  text-white" placeholder="Type or pest your content here" {...register("textareaValue", { required: true })} />
          {errors.textareaValue && <span>This field is required</span>}
          {textareaValue.length > 0 && <div className="show-message-blk relative">
              <p className="absolute bottom-[10px] px-5 py-4  bg-[#3d2920] text-white rounded">{message}</p>
            </div>}
            
        
         
        
          <TextEditorTool textValue={textareaValue} clearFn={clearFn} copymessagefn={copymessage}  downloadFn={downloadText}/>
          <div className="text-editor-tools-blk  p-2  rounded-[10px] mt-5 flex flex-wrap gap-[12px] justify-center items-center ">
            <Button onClick={sentanceCaseValue} className={"common-btn"} strongText={"Sc"} text={"Sentence case"} />
            <Button onClick={lowerCaseValue} className={"common-btn"} strongText={"lc"} text={"lower case"} />
            <Button onClick={upperCaseValue} className={"common-btn"} strongText={"UC"} text={"UPPER CASE"} />
            <Button onClick={capitalizedCaseValue} className={"common-btn"} strongText={"CC"} text={"Capitalized Case"} />
            <Button className={"common-btn"} strongText={"aC"} text={"aLtErNaTiNg cAsE"} />
            <Button className={"common-btn"} strongText={"TC"} text={"Title Case"} />
            <Button className={"common-btn"} strongText={"iC"} text={"InVeRsE CaSe"} />
          </div>
        </form>
      </div>
    </>
  )
}

export default TextEditor
