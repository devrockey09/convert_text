import { useEffect, useState } from "react";

const getStoredValue = (key, initialValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? initialValue : JSON.parse(storedValue);
  } catch {
    return initialValue;
  }
};

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() =>
    getStoredValue(key, initialValue),
  );

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }, [key, storedValue]);

  return { storedValue, setStoredValue };
}

export default useLocalStorage;
