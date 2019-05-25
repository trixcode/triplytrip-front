import { Fragment } from 'react'
import Header from '../src/components/Header';
import PlaceDetailContainer from '../src/containers/PlaceDetail';
import DetailPostTop from '../src/components/DetailPostTop'

function Detail() {
  
  return (
    <Fragment>
      <Header />
      <DetailPostTop />
      <PlaceDetailContainer />
    </Fragment>
  )
}

export default Detail;