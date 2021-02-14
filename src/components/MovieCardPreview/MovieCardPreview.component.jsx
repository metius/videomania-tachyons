import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCardPreview.styles.scss'

const MovieCardPreview = ({movie, url}) => {
  const posterPath = `${url}${movie.poster_path}`;
  const movieTitle = movie.title; 
  const releaseYear = movie.release_date.slice(0,4);
  const rating = movie.vote_average * 10;
  const id = movie.id;

  //console.log(movie);

  return(
    <div className='card movie_card'>
      <Link to={`/card/${id}`}>
        <img className='movie_card-img' src={posterPath} alt={movieTitle}/>
        <div className='card-body'>
          <h5 className='card-title'>{movieTitle}</h5>
          <div className='movie_info'>
            <span className='movie_info-year'>{releaseYear}</span>
            <span className='movie_info-rating'>{rating}%</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCardPreview;