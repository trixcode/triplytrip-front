import { Fragment } from 'react'
import HeaderContainer from '../../src/containers/Header';
import PlaceDetailContainer from '../../src/containers/PlaceDetail';
import DetailPostTop from '../../src/components/DetailPostTop'

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