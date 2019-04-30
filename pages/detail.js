import { Fragment } from 'react'
import Header from '../src/components/Header';
import PlaceDetail from '../src/components/PlaceDetail';

function Detail() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
      <PlaceDetail />
    </Fragment>
  )
}

export default Detail;