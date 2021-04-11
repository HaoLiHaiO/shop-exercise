import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CheckoutForm from "./CheckoutForm";
import { ProductListContextProvider } from "./ProductList.context";
export default function App() {
  return (
    <div className="App">
      <ProductListContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/checkoutForm" component={CheckoutForm} />
          </Switch>
        </BrowserRouter>
      </ProductListContextProvider>
    </div>
  );
}
