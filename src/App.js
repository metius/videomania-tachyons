import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.component';
import MovieCardPage from './pages/MovieCardPage/MovieCardPage.component';
import MovieListPage from './pages/MovieListPage/MovieListPage.component';
import PersonCardPage from './pages/PersonCardPage/PersonCardPage.component';
import Footer from './components/Footer/Footer.component';

// import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <NavBar />
      <Switch>
        {/* 
          I will a route to the SigIn/SigOut/Register page
          Then a page for the account mamagement

        */}
        <Route exact path="/card/:id" component={MovieCardPage} />
        <Route exact path="/person/:id" component={PersonCardPage} />
        <Route exact path="/" component={MovieListPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
