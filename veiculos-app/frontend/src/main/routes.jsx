import React from "react";
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Veiculo from "../veiculos/veiculos";
import About from "../about/about";

export default props => (
    <Router history={hashHistory}>
        <Route path='/veiculos' component={Veiculo} />
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/veiculos'/>
    </Router>
)