import React from 'react';
import {Link} from 'react-router-dom';
import {getImgPath} from '../../utils/utilities';
import {M_PROFILE} from '../../utils/constants';

const CollectionItemCast = ({cast}) => {
  console.log(cast);

  let viewActors = [];

  for(let i=0; i<10; i++) {
    viewActors[i] = (
      // <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="fl w-50 w-25-m w-20-l pa2 bg-white br3 pa3 pa4-ns ma3 ba b--black-10">
        <Link to={`/person/${cast[i].id}`} key={cast[i].id} className="db link dim tc">
          <div className="tc">
            <img src={getImgPath(cast[i].profile_path, M_PROFILE)} alt={cast[i].name} className="br-100 h4 w4 dib ba b--black-05 pa2" title={cast[i].name} />
            <h1 className="f3 mb2">{cast[i].name}</h1>
            <h2 className="f5 fw4 gray mt0">{cast[i].character}</h2>
          </div>
        </Link>
      </div>
    )
  }

  return(
    <div class="cf pa2">
      {viewActors}
    </div>
  )
}

export default CollectionItemCast;