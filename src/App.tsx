import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toast } from './components';


import { AuthPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          {/* <Route path="/about" component={About} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
      <Toast className='toast'/>
    </div>
  );
}

export default App;
