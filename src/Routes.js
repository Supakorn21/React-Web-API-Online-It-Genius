import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/backend/dashboard/Dashboard";
import Product from "./pages/backend/product/Product";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/PageNotFoubd/PageNotFound";
import Register from "./pages/register/Register";

const Routes = () => {
  return (
            <Switch>
                {/* Fronted */}
                <Route exact={true} path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgotpassword" component={ForgotPassword} />

                {/* Backend */}
                <Route  path="/backend/dashboard" component={Dashboard}/>
                <Route  path="/backend/product" component={Product}/>

                <Route component={PageNotFound}/>
            </Switch>
            );
};

export default Routes;
