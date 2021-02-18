import React from 'react';
import withFetch from '../../helper/withFetch.component';
import MoviePopular2 from '../../components/MoviePopular/MoviePopular2.component';
import {getMoviePopular} from '../../utils/utilities';

const ListPage = (props) => {
  //based on the props.match.url variable we will load the appropriate component (with the approrpiete API query)
  console.log(props);
  const url = props.match.url;
  console.log("URL:", url);
  let ListComponent;

  switch (url) {
    case '/':
      ListComponent = withFetch(MoviePopular2, getMoviePopular());
      break;
  
    default:
      ListComponent = MoviePopular2; //test 
      break;
  }


  return(
    <ListComponent /> 
  )
}

export default ListPage;