import React from 'react';
import {Link} from 'react-router-dom'

import {M_POSTER} from '../../utils/constants';
import {getImgPath} from '../../utils/utilities';

const ListCollectionItem = ({item}) => {
  // console.log(item);
  const id = item.id;
  const title = item.title;
  const releaseYear = item.release_date.slice(0,4);
  const poster = getImgPath(item.poster_path, M_POSTER);
  const overview = item.overview;
  // const backdrop = getImgPath(item.backdrop_path, S_BACKDROP);
  // const rating = movie.vote_average * 10;  --> to verify how to visualize eventually - maybe on hover?

  //also maybe genres to visualize?
  //const genres = getGenres(item.genre_ids);

  //for change hover effects (and put maybe overview?) -> Reveal Children on Hover https://tachyons.io/docs/themes/hovers/#
  
  return(
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/card/${id}`} className="db link dim tc">
        <img src={poster} alt={title} className="w-100 db outline black-10 br2"/>
        <span className="child"></span>
        <dl className="mt2 f6 lh-copy">  
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{title}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{releaseYear}</dd>
        </dl>
      </Link>
    </div>
  )
}

export default ListCollectionItem;