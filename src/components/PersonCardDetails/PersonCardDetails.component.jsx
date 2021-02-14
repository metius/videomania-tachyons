import React from 'react';
import './PersonCardDetails.styles.scss';
import Spinner from '../Spinner/spinner.component';

import PersonCardHeader from '../PersonCardHeader/PersonCardHeder.coomponent';
import PersonCardCredits from '../PersonCardCredits/PersonCardCredits.component';

const PersonCardDetails = ({data, isFetching, isError, error}) => {
  console.log(data);

  if(isFetching) return <Spinner />  //--> eventually will personalize with props

  if(isError) return error; //need to undertand how to manage errors

  //returnig anything is there is no data
  if(data.length === 0) return null;

  const personName = data.name;
  const profilePicPath = data.profile_path;
  const birthday = data.birthday;
  const placeOfBirth = data.place_of_birth;
  const biography = data.biography;
  const extrernalIds = data.extrernal_ids;

  const movieCredits = data.movie_credits;
  const tvShowCredits = data.tv_credits;
  
  return(
    <div className='person_card_details'>
      <PersonCardHeader 
        personName={personName}
        profilePicPath={profilePicPath}
        birthday={birthday}
        placeOfBirth={placeOfBirth}
        biography={biography}
        extrernalIds={extrernalIds}
      />

      <PersonCardCredits 
        credits={movieCredits}
      />

      <PersonCardCredits 
        credits={tvShowCredits}
      />
    </div>
  )
}

export default PersonCardDetails;