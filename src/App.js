import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.component';
import SigninSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';
import ListPage from './pages/ListPage/ListPage.component';
import MovieCardPage from './pages/MovieCardPage/MovieCardPage.component';
import MovieListPage from './pages/MovieListPage/MovieListPage.component';
import PersonCardPage from './pages/PersonCardPage/PersonCardPage.component';
import Footer from './components/Footer/Footer.component';

// import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Switch>
        {/* 
          I will a route to the SigIn/SigOut/Register page
          Then a page for the account mamagement

        */}
        <Route exact path="/card/:id" component={MovieCardPage} />
        <Route exact path="/person/:id" component={PersonCardPage} />
        <Route exact path="/sign-in" component={SigninSignUpPage} />
        <Route exact path="/" component={ListPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
