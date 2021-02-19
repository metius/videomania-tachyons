import React from 'react';
import Spinner from '../Spinner/spinner.component';
import ListCollection from '../ListCollection/ListCollection.component';

const MoviePopular2 = ({data, isFetching, isError, error}) => {
  // console.log(data.results);
  const collection = data.results;

  if(isFetching) return <Spinner />  //--> eventually will personalize with props

  if(isError) return error; //need to undertand how to manage errors

  //returnig anything is there is no data
  if(data.length === 0) return null;

  return(
    <ListCollection 
      listTitle="What's Popular"
      collection={collection}
    />
  )
}

export default MoviePopular2;