import { useState } from "react";

function useUndoRedo(initialValue) {
  const [history, setHistory] = useState([initialValue]);

  const [historyIndex, setHistoryIndex] = useState(0);

  const update = (value) => {
    const nextHistory = [...history.slice(0, historyIndex + 1), value];
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex === 0) return null;

    const previousIndex = historyIndex - 1;
    setHistoryIndex(previousIndex);
    return history[previousIndex];
  };

  const redo = () => {
    if (historyIndex === history.length - 1) return null;

    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);
    return history[nextIndex];
  };

  return { update, undo, redo };
}

export default useUndoRedo;
