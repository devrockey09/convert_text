import { saveAs } from "file-saver";

const downloadText = (textareaValue, setMessage) => {
  if (!textareaValue) return;

  const blob = new Blob([textareaValue], {
    type: "text/plain;charset=utf-8",
  });

  saveAs(blob, "my-text.txt");
  setMessage("Text downloaded successfully");
};

export default downloadText;
