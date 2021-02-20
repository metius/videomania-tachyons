import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import withFetch from '../../helper/withFetch.component';
import {getMovieDetailsUrl} from '../../utils/utilities';

const ItemPage = (props) => {
  
  const CollectionItemComponent = withFetch(CollectionItem, getMovieDetailsUrl(props.match.params.id));

  return(
    <CollectionItemComponent />
  )
}

export default ItemPage;