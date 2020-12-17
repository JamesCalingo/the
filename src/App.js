import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Story from './pages/Story'
import MessageList from './pages/MessageList'
import CreateMsg from './pages/CreateMsg'
import UpdateMessage from './pages/UpdateMessage'
import Nav from './components/Nav'
import Welcome from './pages/Welcome'
import Admin from './pages/Admin'

import './App.css'

function App () {
  return (
    <Router>
      <Nav />

   
      <Route exact path='/' component={Welcome} />
      <Route exact path="/story" component={Story} />
      <Route exact path='/messages' component={MessageList} />
      <Route exact path='/create' component={CreateMsg} />
      <Route exact path='/update/:id' component={UpdateMessage} />
      <Route exact path='/admin' component={Admin} />
      
   
    </Router>
  )
}

export default App
