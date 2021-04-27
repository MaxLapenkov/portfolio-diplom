import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Header, Toast } from './components';


import { AuthPage, MainPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/main" component={MainPage} />
          {/* <Route component={NotFound} /> */}
          <Route path="*">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </Router>
      <Toast className='toast'/>
    </div>
  );
}

export default App;
