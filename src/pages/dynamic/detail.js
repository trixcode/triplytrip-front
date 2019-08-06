import React, { Fragment } from 'react'
import HeaderContainer from '../../containers/Header';
import PlaceDetailContainer from '../../containers/PlaceDetail';
import FooterContainer from '../../containers/Footer'

function Detail() {
  
  return (
    <Fragment>
      <HeaderContainer />
      <PlaceDetailContainer />
      <FooterContainer />
    </Fragment>
  )
}

export default Detail;