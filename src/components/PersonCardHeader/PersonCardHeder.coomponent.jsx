import React from 'react';
import './PersonCardHeder.styles.scss';

import {getImgPath} from '../../utils/utilities';
import {M_PROFILE, L_PROFILE} from '../../utils/constants';

const PersonCardHeader = ({personName,profilePicPath,birthday,placeOfBirth,biography,extrernalIds}) => {
  const profileImg = getImgPath(profilePicPath, L_PROFILE);

  console.log(profileImg);
  return(
    <div className=''>Person card header </div>
  )
} 

export default PersonCardHeader;