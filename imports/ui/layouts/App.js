

import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import 'bootstrap/dist/css/bootstrap.min.css'
import Brand from '../components/Brand'
import Home from './Home'
import Search from './Search'
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'




class App extends React.Component {

render(props) {
    return(
<Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route  path="/search" component={Search} />
    </div>
</Router>
    )
}

}
export default App;
