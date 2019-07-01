import React, { Fragment } from 'react'
import HeaderContainer from '../../containers/Header';
import PlaceDetailContainer from '../../containers/PlaceDetail';
import DetailPostTopContainer from '../../containers/DetailPostTop'


function Detail() {
  
  return (
    <Fragment>
      <HeaderContainer />
      <DetailPostTopContainer />
      <PlaceDetailContainer />
    </Fragment>
  )
}

export default Detail;