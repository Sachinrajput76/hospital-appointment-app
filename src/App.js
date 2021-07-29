import React from 'react'
import Header from './Components/Header'
import TaskList from './Screens/TaskList'
import SendRequest from './Screens/SendRequest'
import DocumentStatus from './Screens/DocumentStatus'
import Fax from './Screens/Fax'
import Account from './Screens/Account'
import './styles/App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom'
import { menus } from './Components/HeaderData'
import { Page404 } from './Components/Page404'

const menuPath = menus.map((menu) => {
  return menu.path
})

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Switch>
        <Route exact path={menuPath[0]} component={TaskList} />
        <Route path={menuPath[1]} component={SendRequest} />
        <Route path={menuPath[2]} component={DocumentStatus} />
        <Route path={menuPath[3]} component={Fax} />
        <Route path={menuPath[4]} component={Account} />
        <Route exact={true} path='*' component={Page404} />
      </Switch>
    </Router>
  )
}
export default App
