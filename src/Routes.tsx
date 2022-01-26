import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ToDoList } from "./pages/Todo";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todo" exact component={ToDoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
