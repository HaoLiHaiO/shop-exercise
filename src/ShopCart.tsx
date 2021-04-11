import { useContext } from "react";
import { ProductListContext } from "./ProductList.context";
import { Link, useHistory } from "react-router-dom";

export default function ShopCart() {
  // const history = useHistory();
  const { itemList, counter } = useContext(ProductListContext);

  // implemented with useHistory (onNavigate) as well for fun - it works
  /*
  const onNavigate = () => {
    history.push("/checkoutForm");
  };
*/

  const calcTotal = (item) => {
    let total = 0;
    itemList.forEach((el) => {
      total += el.price * counter[el.name];
    });
  };

  let allNumbers = itemList.map((item, i) => {
    let total = 0;
    return (total = item.price * counter[item.name]);
  });

  return (
    <div className="item-container">
      <h1 id="cart">Shopping Cart</h1>
      {itemList.length > 0 && (
        <div>
          {itemList.map((item, i) => (
            <div className="itemdata-wrapper" key={i}>
              <span className="itemData">{item.name}, </span>

              <span className="itemData">quantity: {counter[item.name]}, </span>

              <span className="itemData">price: {item.price} euros </span>
            </div>
          ))}
        </div>
      )}
      <div>
        <div className="total">
          Total: {allNumbers.reduce((a, b) => a + b, 0)} euros
        </div>

        <Link to="/checkoutForm">
          <button>Submit</button>
        </Link>

        {/* IMPLEMENTATION FOR FUN WITH USEHISTORY 🥳 - uncomment to see it at work, useHistory is already imported 
        
        <div>
          <button type="button" onClick={onNavigate}>
            selected items with useHistory hook
          </button>
        </div>*/}
      </div>
    </div>
  );
}
