import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  PageHome,
  PageCategories,
  PageCategoriesDetail,
  PageProfesional,
} from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route exact path="/categories">
            <PageCategories />
          </Route>
          <Route path="/categories/:detail">
            <PageCategoriesDetail />
          </Route>
          <Route path="/profesional/:detail">
            <PageProfesional />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
