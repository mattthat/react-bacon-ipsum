import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnotherWindow } from "./routes/AnotherWindow";
import { Home } from "./routes/Home";
import { Welcome } from "./routes/Welcome";
import { Time } from "./routes/Time";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/another-window"><AnotherWindow /></Route>
              <Route path="/welcome"><Welcome /></Route>
              <Route path="/time"><Time /></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
