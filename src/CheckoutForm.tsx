import React, { FunctionComponent, useContext } from "react";
import { ProductListContext } from "./ProductList.context";
import { Link } from "react-router-dom";
import { Item } from "./data";
import ProductList from "./ProductList";

const CheckoutForm: FunctionComponent = () => {
  const { itemList } = useContext(ProductListContext);

  return (
    <div className="checkoutform">
      <h1 id="toptitle" className="formtitle">
        Checkout Form
      </h1>
      <form>
        <label htmlFor="fname">Full Name</label>
        <br />
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Mark Abene"
        />
        <br />
        <br />
        <label htmlFor="adr">Address</label> <br />
        <input type="text" id="adr" name="address" placeholder="Bonygasse 21" />
        <br />
        <br />
        <label htmlFor="city">City</label> <br />
        <input type="text" id="city" name="city" placeholder="Innsbruck" />
        <br />
        <br />
        <label htmlFor="state">State</label> <br />
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Tyrol"
        /> <br /> <br />
        <label htmlFor="zip">Zip</label> <br />
        <input type="text" id="zip" name="zip" placeholder="6020" />
        <br />
      </form>

      <h1 className="formtitle">Items in cart</h1>
      {itemList.length > 0 ? (
        <ol>
          {itemList.map((it) => (
            <>
              <div className="items-checkout" key={it.name + it.price}>
                <div>
                  {it.name}: {it.price} euros
                </div>
              </div>
              <hr />
            </>
          ))}
        </ol>
      ) : (
        <h1>No item selected</h1>
      )}

      <div>
        <button
          onClick={() =>
            console.log(
              "Congrats! Order successful! You will receive a confirmation per email within minutes."
            )
          }
        >
          Submit
        </button>
        <br />
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};
export default CheckoutForm;

/**
 * FOR FUN 😃 - REMOVE ITEMS FROM CART functionality: 
 * 
 * 
 * 
 *       {itemList.length > 0 ? (
        <ol>
          {itemList.map((it) => (
            <>
              <li style={{ marginBottom: 15 }} key={it.name + it.price}>
                <div style={{ fontWeight: 800, marginBottom: "15px" }}>
                  {it.name}
                </div>
                <div>{it.price}</div>
                <button onClick={() => remove(it.name)}>remove it</button>
              </li>
              <hr />
            </>
          ))}
        </ol>
      ) : (
        <h1>No product selected</h1>
      )}
  * Add this before rendering: 
    const onRemove = (item: Item) => {
    removeItem(item);
  };
 */
