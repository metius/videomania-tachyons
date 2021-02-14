import React, { Component } from 'react';
import MovieCardPreview from '../MovieCardPreview/MovieCardPreview.component';

import {TMDB_URL, TMDB_KEY} from '../../utils/constants';
import './MoviePopular.styles.scss';

class MoviePopular extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
    }
  }

  componentDidMount() {
    fetch(`${TMDB_URL}movie/popular?${TMDB_KEY}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(data => this.setState({
        movieList: data.results
      }))
      .catch(err => console.log(err))
  }

  render() {
    const config = this.props.config;
    const movieList = this.state.movieList;

    return(
      <div className='movie_list'>
        {
          movieList
          ? (
              movieList.map(movie => {
              /* console.log(movie); */
                return (                  
                  <MovieCardPreview key={movie.id} movie={movie} url={`${config.base_url}${config.poster_sizes[4]}`} />                  
                )
              })
            )
          : "No data available"
        }
      </div>
    )}
}

export default MoviePopular;