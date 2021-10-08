import React from 'react';
import {Switch, Route} from 'react-router-dom';

import store, {persistor, useAppSelector} from 'src/store';
import LoginPage from 'src/pages/LoginPage';
import ConsolePage from './pages/ConsolePage';


function App() {
  const isLoggedIn = useAppSelector(state => !!state.auth.sessionKey?.length)

  return (
    <Switch>
      <Route path='/' exact render={() => <LoginPage />} />
      {isLoggedIn && <Route path='/console' exact render={() => <ConsolePage />} />}
      {/*TODO редирект на авторизацию*/}
    </Switch>
  );
}

export default App;
