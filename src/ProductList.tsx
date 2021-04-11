import { useContext } from "react";
import { data, Item } from "./data";
import { ProductListContext } from "./ProductList.context";

const items: Item[] = data;
export default function ProductList() {
  const { itemList, addItem } = useContext(ProductListContext); // here you get your list and the method to set the list

  const addItemToItemList = (item: Item) => {
    addItem(item);
  };

  return (
    <div className="itemlist">
      {items.map((item, index) => (
        <div className="item-wrapper" key={index}>
          <div className="item-name">{item.name}</div>
          <div>
            <img src={item.picture} alt={item.name} />
          </div>
          <div className="price">{item.price} euros</div>
          <button onClick={() => addItemToItemList(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
