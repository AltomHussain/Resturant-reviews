import "./App.css";
import Home from "./component/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UpdateRestaurant from "./component/UpdateRestaurant";
import RestaurantDetail from "./component/RestaurantDetail"
function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants/:id/update" component={UpdateRestaurant} />
        <Route exact path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
