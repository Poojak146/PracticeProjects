import { BrowserRouter ,Switch,Route} from "react-router-dom"
import React from "react";
import Home from './Main'
import DescriptionPage from './DescriptionPage'
export default function RoutePage() {
    return (
<BrowserRouter>

<Switch>
<Route exact path="/home">
  <Home />
</Route>
<Route exact path="/DescriptionPage">
  <DescriptionPage />
</Route>

</Switch>

</BrowserRouter>
    )}