import {TMDB_URL, TMDB_KEY} from './constants';
import {TMDB_CONF} from './tmdbConf';
import no_profile_picture from '../assets/images/no_profile_picture.svg';
import Spinner from '../components/Spinner/spinner.component';

export const getReleaseYear = (releaseDate) => {
  return releaseDate.slice(0,4);
}

//get list of Popular Now movie (for home page)
export const getMoviePopular = () => {
  return `${TMDB_URL}movie/popular?${TMDB_KEY}&language=en-US&page=1`;
}

//11/02/2021 - need to add extra apped_to_respond (see Postman) for:
//  · external_ids,recommendations,watch/providers
export const getMovieDetailsUrl = (movieId) => {
  return `${TMDB_URL}movie/${movieId}?${TMDB_KEY}&append_to_response=images,videos,credits&include_image_language=en,null;`
}

//query: https://api.themoviedb.org/3/person/62?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&append_to_response=images,movie_credits,tv_credits,external_ids
export const getPersonDetailsUrl = (personId) => {
  return `${TMDB_URL}person/${personId}?${TMDB_KEY}&language=en-US&&append_to_response=images,movie_credits,tv_credits,external_ids`;
}

//images utilities
export const getImageBaseUrl = () => TMDB_CONF.images.base_url;

export const getImgPath = (imgPath, size) => !imgPath ? no_profile_picture :`${getImageBaseUrl()}${size}${imgPath}`;

//function to check status when receiving data from withFetch - to be called in the view component
export const checkFetchStatus = ({isError, error, isFetching, data}) => {
  if(isFetching) return <Spinner /> //--> eventually will personalize with props
  if(isError) return error; //need to undertand how to manage errors
  //returnig anything is there is no data
  if(data.length === 0) return null;

  return data;
}
