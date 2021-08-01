import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home"
import Edit from "./components/Edit"
import Graph from "./components/Graph"


function App() {
  return (
    <div className="">

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/edit' component={Edit} />
        <Route path='/graph' component={Graph} />
      </Switch>

    </div>
  );
}

export default App;
