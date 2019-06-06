import { Fragment } from 'react'
import HeaderContainer from '../../src/containers/Header';
import PlaceDetailContainer from '../../src/containers/PlaceDetail';
import DetailPostTop from '../../src/components/DetailPostTop'
import SuccessModal from '../../src/components/SuccessModal';

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