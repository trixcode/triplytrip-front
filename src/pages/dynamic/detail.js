import React, { Fragment } from 'react'
import HeaderContainer from '../../containers/Header';
import PlaceDetailContainer from '../../containers/PlaceDetail';
import DetailPostTop from '../../components/DetailPostTop'

function Detail() {
  
  return (
    <Fragment>
      <HeaderContainer />
      <DetailPostTop />
      <PlaceDetailContainer />
    </Fragment>
  )
}

export default Detail;