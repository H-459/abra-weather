import { useState } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorageValue = (value: T) => {
    try {
      const valueItem = value instanceof Function ? value(currentValue) : value;
      setCurrentValue(valueItem);
      localStorage.setItem(key, JSON.stringify(valueItem));
    } catch (e) {
      console.log("Fail to set value in useLocalStorage");
    }
  };
  return [currentValue, setLocalStorageValue];
};

export default useLocalStorage;