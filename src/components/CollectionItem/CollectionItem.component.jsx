import React from 'react';
import CollectionItemHeader from '../CollectionItemHeader/CollectionItemHeader.component';
import CollectionItemCast from '../CollectionItemCast/CollectionItemCast.component';
import Spinner from '../Spinner/spinner.component';

import {getImgPath, getReleaseYear} from '../../utils/utilities';
import {M_POSTER, L_POSTER, L_BACKDROP} from '../../utils/constants';

const CollectionItem = (props) => {
  console.log(props);

  const data = props.data;
  const isLoading = props.isFetching;
  const isError = props.isError;
  const err = props.error;

  if(isLoading) return <Spinner />  //--> eventually will personalize with props

  if(isError) return err; //need to undertand how to manage errors

  //returnig anything is there is no data
  if(data.length === 0) return null;

  //getting data to pass to the other components
  const title = data.title;
  const tagline = data.tagline;
  const overview = data.overview;
  const genres = data.genres;
  const releaseYear = getReleaseYear(data.release_date);
  const duration = data.runtime;
  const poster = getImgPath(data.poster_path, M_POSTER) ; 
  const backdrop = getImgPath(data.backdrop_path, L_BACKDROP);

  const cast = data.cast;
  return(
    // I still prefer to divide in smalled chuncks: header, cast, etc...
    //header will contains: title, images, overview, rate, and later on list of streaming available (if it is a movie/tv-show - we should use the collectionItem component also as a start for other collections (people))
    <main className='mw-8 mw9-ns center'>
      <CollectionItemHeader 
        title={title}
        tagline={tagline}
        overview={overview}
        genres={genres}
        releaseYear={releaseYear}
        duration={duration}
        poster={poster}
        backdrop={backdrop}
      />
      <CollectionItemCast />
    </main>
  )
}

export default CollectionItem;