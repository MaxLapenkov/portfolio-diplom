import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Header, Toast } from './components';


import { AuthPage, MainPage, SchedulePage, OlympiadPage, AchievementPage, ClassPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/olympiads" component={OlympiadPage} />
          <Route path="/achievements" component={AchievementPage} />
          <Route path="/class" component={ClassPage} />
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
