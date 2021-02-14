import React, { Component } from 'react';
import './MovieCardDetails.styles.scss';

import {TMDB_URL, TMDB_KEY} from '../../utils/constants';
import {TMDB_CONF} from '../../utils/tmdbConf';
// import {getReleaseYear} from '../../utils/utilities';

class MovieCardDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    //fetch the movie info
    //https://api.themoviedb.org/3/movie/508442?api_key=8079c8ef46a65047553ab8e45b990c53&append_to_response=images,videos&include_image_language=en,null
    const fetchUrl = `${TMDB_URL}movie/${this.props.movie}?${TMDB_KEY}&append_to_response=images,videos&include_image_language=en,null`;

    fetch(fetchUrl)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
        movie: data,
        isLoading: false,
      }))
      .catch(err => console.log(err))
  }
  
  render() {
    //need to create a spinner while loading
    //also need an utility to get the rigth path for an specific image
    const movie = this.state.movie;
    console.log(movie);
    console.log("Release date: ", movie.release_date);
    // const coverImageUrl = `${TMDB_CONF.images.base_url}${TMDB_CONF.images.poster_sizes[2]}${movie.images.posters[0].file_path}`;
    
    return(
      this.isLoading 
      ? 
        "Loading movie..." 
      : (<div className='movie-card'>
          <div className='container'>
            <img src={`${TMDB_CONF.images.base_url}${TMDB_CONF.images.poster_sizes[2]}${movie.poster_path}`} alt='cover' className='cover'/>
            <div className='hero'>
              {/* adding dynamic backgroun image - cannot use pseudo-class before. Let's try */
              }
              <div className='hero' style={{
                content:'',
                width:'100%', 
                height:'100%',
                position:'absolute',
                overflow: 'hidden',
                top:0, 
                left:0,
                background:'red',
                zIndex:-1,
                background: `url(${TMDB_CONF.images.base_url}${TMDB_CONF.images.backdrop_sizes[2]}${movie.backdrop_path})`,
                filter: 'opacity(55%) blur(2px)',
 
                transform: 'skewY(-2.2deg)',
                transformOrigin:'0 0',
              }}></div>
              <div className='details'>
                <div className='title1'>{`${movie.title} (${movie.release_date})`}</div>
                <div className='tagline'>{movie.tagline}</div>
              </div>
            </div>
          </div>
        </div>)
    )
  }
}

export default MovieCardDetails;