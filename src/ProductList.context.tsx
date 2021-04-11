import React, {
  createContext,
  FunctionComponent,
  useState,
  useCallback,
} from "react";
import { Item } from "./data";

type ProductListContextType = {
  itemList: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  counter: { [itemName: string]: number };
};

// Note to self: MUST ADD type in createContext with TS
export const ProductListContext = createContext<ProductListContextType>(
  {} as ProductListContextType
);

export const ProductListContextProvider: FunctionComponent = ({ children }) => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [counter, setCounter] = useState<{ [itemName: string]: number }>({});

  const addItem = useCallback((item) => {
    setCounter((prev) => ({
      ...prev,
      [item.name]: (prev[item.name] || 0) + 1,
    }));
    setItemList((prev) => (prev.includes(item) ? prev : [...prev, item]));
  }, []);

  const removeItem = useCallback(
    (itemName) =>
      setItemList((prev) => prev.filter((it) => it.name !== itemName)),
    []
  );

  return (
    <ProductListContext.Provider
      value={{ itemList: itemList, addItem, removeItem, counter }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
