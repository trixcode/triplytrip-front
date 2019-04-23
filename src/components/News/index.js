
import './news.scss';

const News = (props) => {
  return (
    <div className='container'>
      <div className='titleBlock'>
        <div className='title'>daily news tips</div>
        <div className='subTitle'>the best places to see autumn colours</div>
      </div>
      <div className='cardsBlock'>
        <div className='card'>
          <div className='cardTopSide'>
            <div className='date'>22 jun</div>
          </div>
          <div className='cardBottomSide'>
            <div className='cardNews'>15 Restaurants in London and NewYork</div>
            <div className='com'>
              <div className='icon'>News</div>
              <div className='icon'>Comments</div>
            </div>
            <div className='description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</div>
            <button className='btn'>read more</button>
          </div>
        </div>
        <div className='card'>
          <div className='cardTopSide'>
            <div className='date'>22 jun</div>
          </div>
          <div className='cardBottomSide'>
            <div className='cardNews'>15 Restaurants in London and NewYork</div>
            <div className='com'>
              <div className='icon'>News</div>
              <div className='icon'>Comments</div>
            </div>
            <div className='description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</div>
            <button className='btn'>read more</button>
          </div>
        </div>
        <div className='card'>
          <div className='cardTopSide'>
            <div className='date'>22 jun</div>
          </div>
          <div className='cardBottomSide'>
            <div className='cardNews'>15 Restaurants in London and NewYork</div>
            <div className='com'>
              <div className='icon'>News</div>
              <div className='icon'>Comments</div>
            </div>
            <div className='description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</div>
            <button className='btn'>read more</button>
          </div>
        </div>
        <div className='card'>
          <div className='cardTopSide'>
            <div className='date'>22 jun</div>
          </div>
          <div className='cardBottomSide'>
            <div className='cardNews'>15 Restaurants in London and NewYork</div>
            <div className='com'>
              <div className='icon'>News</div>
              <div className='icon'>Comments</div>
            </div>
            <div className='description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</div>
            <button className='btn'>read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;