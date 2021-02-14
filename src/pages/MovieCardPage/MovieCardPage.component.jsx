import React from 'react';
import MovieCardDetails from '../../components/MovieCardDetails/MovieCardDetails.component';
import withFetch from '../../helper/withFetch.component';
import {getMovieDetailsUrl} from '../../utils/utilities';

const MovieCardPage = (props) => {
  // console.log(props);
  // console.log(`movie id: ${props.match.params.id}`);  

  const CardDetails = withFetch(MovieCardDetails, getMovieDetailsUrl(props.match.params.id));
  //we call the withFetch funtion here and not in the return in order to avoid to create a new instance every render

  return(
    <CardDetails />
  )
}

export default MovieCardPage;