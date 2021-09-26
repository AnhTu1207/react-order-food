import { axiosBaseConfig, setUpInterceptors } from "utils";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainRoute, AuthRoute } from "navigation";

import { PrivateRoute } from "components";

import "./App.css";

axiosBaseConfig();
setUpInterceptors();

function App() {
  return (
    <Router>
      <Switch>
        {AuthRoute.map((item) => (
          <Route
            exact={item.exact}
            render={(props) => <item.Component {...props} />}
            path={item.path}
          />
        ))}
        {MainRoute.map((item) => (
          <Route
            exact={item.exact}
            path={item.path}
            render={(props) => <PrivateRoute><item.Component {...props} /></PrivateRoute>}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
