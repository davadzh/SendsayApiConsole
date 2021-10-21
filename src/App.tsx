import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import LoginPage from 'src/pages/LoginPage';
import ConsolePage from './pages/ConsolePage';
import {authenticateCheck} from './store/actions';
import {useAppDispatch, useAppSelector} from './store';

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(authenticateCheck());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route path="/login" render={() => <LoginPage />} />
      {isLoggedIn && <Route path="/console" render={() => <ConsolePage />} />}
      <Route path="*" render={() => <Redirect to={'/login'} />} />
    </Switch>
  );
}

export default App;
