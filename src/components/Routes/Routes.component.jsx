import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../../App';
import MoviePopular from '../MoviePopular/MoviePopular.component';
import MovieCardPage from '../../pages/MovieCardPage/MovieCardPage.component';

const Routes = () => {
  return(
    <App>
      <Switch>
        <Route exact path="/card/:show-id" component={MovieCardPage} />
        <Route exact path="/" component={MoviePopular} />
      </Switch>
    </App>
  )
}

export default Routes;