import React from 'react';
import CardDetailsHeader from '../CardDetailsHeader/CardDetailsHeader.component';
import CardDetailsCast from '../CardDetailsCast/CardDetailsCast.component';
import Spinner from '../Spinner/spinner.component';
import {TMDB_CONF} from '../../utils/tmdbConf';
import {getReleaseYear} from '../../utils/utilities';

const MovieCardDetails = (props) => {
  console.log(props);

  const data = props.data;
  const isLoading = props.isFetching;
  const isError = props.isError;
  const err = props.error;

  if(isLoading) return <Spinner />  //--> eventually will personalize with props

  if(isError) return err; //need to undertand how to manage errors

  //returnig anything is there is no data
  if(data.length === 0) return null;


  //data for the header
  const poster = `${TMDB_CONF.images.base_url}${TMDB_CONF.images.poster_sizes[4]}${data.poster_path}`;
  const title = data.title.toUpperCase();
  const tagline = data.tagline;
  const releaseYear = getReleaseYear(data.release_date);
  const runtime = data.runtime;
  const genres = data.genres;
  const rating = data.vote_average;
  const description = data.overview;
  //will need to understabd about the video trailer. For now let's skip

  //data for cast component
  const cast = data.credits.cast;

  return(
    <div className='movie_card_details'>
      <CardDetailsHeader 
        poster={poster} 
        title={title} 
        tagline={tagline}
        releaseYear={releaseYear} 
        runtime={runtime}
        genres={genres}
        rating={rating}
        description={description}
        // to add social links?
        //to add Watch providers (where I can watch in Streaming) using the append_to_response=watch/providers
      />

      <CardDetailsCast cast={cast} />

      {/* 
      <CardMedia /> 
      <CardRecommendedMoveis /> --> using the append_to_providers=reccomendations
      */}
    </div>
  )
}

export default MovieCardDetails;