import "./App.css";
import Home from "./component/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UpdateRestaurant from "./component/UpdateRestaurant";
import RestaurantDetail from "./component/RestaurantDetail"
import { RestaurantContextProvider } from "./contentex/RestaurantContext";
function App() {
  return (
    <RestaurantContextProvider>

    <div className="container">
      <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants/:id/update" component={UpdateRestaurant} />
        <Route exact path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </Router>
      
    </div>
    </RestaurantContextProvider>
  );
}

export default App;
