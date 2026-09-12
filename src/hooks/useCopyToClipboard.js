function useCopyToClipboard() {
  const copyToClipboard = async (text) => {
    if (!text) {
      return { success: false, error: "There is no text to copy" };
    }

    if (!navigator.clipboard) {
      return {
        success: false,
        error: "Clipboard access is not supported in this browser",
      };
    }

    try {
      await navigator.clipboard.writeText(text);
      return { success: true, error: "" };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to copy text to the clipboard";
      return { success: false, error: errorMessage };
    }
  };

  return copyToClipboard;
}

export default useCopyToClipboard;
