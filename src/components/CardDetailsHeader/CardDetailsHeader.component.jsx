import React from 'react';
import './CardDetailsHeader.styles.scss';

const CardDetailsHeader = ({poster,title,tagline,releaseYear,runtime,genres,rating,description}) => {
  const genresStr = genres.map((genre, i) => 
    {if(i === genres.length - 1) {
      return genre.name;
    } else {
      return `${genre.name} · `
    }}   
  );
  
  return(
    <div className='card_details_header'>
      <div className='card_details_header__poster'>
        <img src={poster} alt={`${title}`} />
      </div>
      <div className='card_details_header__info'>
        <h2 className='card_details_header__title'>{title}</h2>
        <h3 className='card_details_header__tagline'>{tagline}</h3>
        <p className='card_details_header__details'>
          <span className='card_details_header__year'>{releaseYear}</span>
          <span className='card_details_header__runtime'>{runtime}</span>
          <span className='card_details_header__genres'>{genresStr}</span>
        </p>
        <p className='card_details_header__description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default CardDetailsHeader;