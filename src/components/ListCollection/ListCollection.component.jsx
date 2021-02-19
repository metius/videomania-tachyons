import React from 'react';
import ListCollectionItem from '../ListCollectionItem/ListCollectionItem.component';

const ListCollection = ({listTitle, collection}) => {

  return (
    <article>
      <h2 className="f3 fw4 pa3 mv0">{listTitle}</h2>
      <div className="cf pa2">
        {collection.map(item => <ListCollectionItem item={item} key={item.id}/>)}
      </div>
    </article>
  )
}

export default ListCollection;