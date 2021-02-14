import React from 'react';
import {Link} from 'react-router-dom';
import './CardDetailsCast.styles.scss';
import {getImgPath} from '../../utils/utilities';
import {M_PROFILE} from '../../utils/constants';

const CardDetailsCast = ({cast}) => {
  let viewActors = [];
  
  for(let i=0; i<10; i++) {
      viewActors[i] = (
      <Link to={`/person/${cast[i].id}`} key={cast[i].id}>
        <figure className='card_details_cast__card'  >
          <img className='card_details_cast__img' src={getImgPath(cast[i].profile_path, M_PROFILE)} alt={cast[i].name}/>
          <figcaption className='card_details_cast__caption'>
            <span className='card_details_cast__name'>{cast[i].name}</span>
            <span className='card_details_cast__character'>{cast[i].character}</span>
          </figcaption>
        </figure>
      </Link>);
  }

  return (
    <div className='card_details_cast'>{viewActors}</div>
  )
}

export default CardDetailsCast;