import React from 'react';
import PersonCardDetails from '../../components/PersonCardDetails/PersonCardDetails.component';
import withFetch from '../../helper/withFetch.component';
import {getPersonDetailsUrl} from '../../utils/utilities';

const PersonCardPage = (props) => {
  console.log(props.match.params.id)
  const PersonCard = withFetch(PersonCardDetails, getPersonDetailsUrl(props.match.params.id));
  
  return (
    <PersonCard />
  )
}

export default PersonCardPage;