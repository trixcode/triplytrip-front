import { Fragment } from 'react'
import Header from '../src/components/Header';
import PlaceDetailContainer from '../src/containers/PlaceDetail';

function Detail() {
  return (
    <Fragment>
      <Header />
      <PlaceDetailContainer />
    </Fragment>
  )
}

export default Detail;