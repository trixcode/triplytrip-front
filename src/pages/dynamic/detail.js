import React, { Fragment } from 'react'
import HeaderContainer from '../../containers/Header';
import PlaceDetailContainer from '../../containers/PlaceDetail';
import DetailPostTop from '../../components/DetailPostTop'
import SuccessModal from '../../components/SuccessModal';

function Detail() {
  
  return (
    <Fragment>
      <HeaderContainer />
      <DetailPostTop />
      <PlaceDetailContainer />
      <SuccessModal />
    </Fragment>
  )
}

export default Detail;