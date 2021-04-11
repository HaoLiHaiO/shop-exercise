import React, { FunctionComponent } from "react";
import ItemList from "./ProductList";
import ItemContainer from "./ShopCart";

const HomePage: FunctionComponent = () => {
  return (
    <>
      <div className="itemListPage">
        <ItemList />
        <ItemContainer />
      </div>
    </>
  );
};
export default HomePage;
