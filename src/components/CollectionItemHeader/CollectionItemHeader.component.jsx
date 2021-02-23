import React from 'react';

const CollectionItemHeader = ({title, tagline, overview, genres, releaseYear, duration, poster, backdrop}) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;

  const genresList = genres.reduce((acc, genre, i) => {
    if(i === genres.length - 1) {
      return acc + genre.name;
    }
    return acc + `${genre.name}, `;
  },"");
  
  return(
    <div className="cover bg-left bg-center-l" style={{backgroundImage: `url(${backdrop})`}}>
      <div className="bg-black-80 ">
        <article>
          <div className="pv4 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns pl4 mb4 mb0-ns w-100 w-40-ns">
                <img src={poster} className="db" alt={title} />
              </div>
              <div className="w-100 w-60-ns pl3-ns mr6 white-90">
                <h1 className="f1 fw4 mt0 mb0 lh-title">{title} <small className="fw3 fs2 ">({releaseYear})</small></h1>
                <h2 className="f3 fw3 i mt3 lh-title">{tagline}</h2>
                <p className="f5 f4-l mt4 lh-copy ">
                  {overview}
                </p>
                <p className="f5 f4-l mt3 lh-copy ">
                  {hours}h {minutes}m · {genresList}
                </p>
              </div>
            </div>   
          </div>                     
        </article>
      </div>
    </div>
  )
}

export default CollectionItemHeader;