import React, { Component } from 'react';
import MoviePopular from '../../components/MoviePopular/MoviePopular.component';

import {TMDB_CONF} from '../../utils/tmdbConf';

class MovieListPage extends Component {
  constructor() {
    super();
    this.state = {
      base_url: TMDB_CONF.images.base_url,
      secure_base_url: TMDB_CONF.images.secure_base_url,
      backdrop_sizes: TMDB_CONF.images.backdrop_sizes,
      logo_sizes: TMDB_CONF.images.logo_sizes,
      poster_sizes: TMDB_CONF.images.poster_sizes,
      profile_sizes: TMDB_CONF.images.profile_sizes,
      still_sizes: TMDB_CONF.images.still_sizes,
      change_keys: TMDB_CONF.change_keys,
    }
  }

  //later on, the conf settings will be fetched in ComponentDidMount
  //For now they are saved in an  object
  // https://api.themoviedb.org/3/configuration?api_key=8079c8ef46a65047553ab8e45b990c53
  

  //CONSIDERATION: this page will render a list of movies/tv-show
  //Need to consider how many possible lists I will have?
  //  · Populars
  //  · Now on Theatres
  //  · etc

  //Also need to consider what to shwo in home page -> let's make work the link to the card page for now
  //also will need to change from MoviePopular to MovieList and research the populars (now embedded in MoviePopular component)
  render() {
    //console.log(this.props);
    const config = this.state;
    return(
      <MoviePopular config={config} />
    )
  }
}

export default MovieListPage;