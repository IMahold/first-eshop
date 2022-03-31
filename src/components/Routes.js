import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Cart from "./Cart";
import Man from "./products/Man";
import Woman from "./products/Woman";
import Jewelery from "./products/Jewelery";
import Electronics from "./products/Electronics";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/man" component={Man} />
      <Route exact path="/woman" component={Woman} />
      <Route exact path="/jewelery" component={Jewelery} />
      <Route exact path="/electronics" component={Electronics} />
      <Route exact path="/cart" component={Cart} />
      <Route component={Unkwown} />
    </Switch>
  );
}

function Unkwown() {
  return <div>Error 404, Page not found</div>;
}
