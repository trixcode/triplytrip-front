
import './news.scss';

const News = (props) => {
  return (
    <div className='container'>
      <div className='title__block'>
        <div className='title'>daily news tips</div>
        <div className='sub-title'>the best places to see autumn colours</div>
      </div>
      <div className='news-card-wrapper'>
        <div className='news-card'>
          <div className='news-card-header'>
            <div className='news-card__date'>
              <span className='date__day'>15</span>
              <span className='date__month'>jun</span>
            </div>
            <img className='news-card__image' src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' alt='logo' />
          </div>
          <div className='news-card-footer'>
            <div className='news-card__title'>15 Restaurants in London and New-York and Bishkek</div>
            <div className='news-card__tag'>
              <span className='icon'>News</span>
              <span className='icon'>Comments</span>
            </div>
            <p className='news-card__description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</p>
            <button className='news-card-button'>read more</button>
          </div>
        </div>
           <div className='news-card'>
          <div className='news-card-header'>
            <div className='news-card__date'>
              <span className='date__day'>15</span>
              <span className='date__month'>jun</span>
            </div>
            <img className='news-card__image' src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' alt='logo' />
          </div>
          <div className='news-card-footer'>
            <div className='news-card__title'>15 Restaurants in London and New-York and Bishkek</div>
            <div className='news-card__tag'>
              <span className='icon'>News</span>
              <span className='icon'>Comments</span>
            </div>
            <p className='news-card__description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</p>
            <button className='news-card-button'>read more</button>
          </div>
        </div>
        <div className='news-card'>
          <div className='news-card-header'>
            <div className='news-card__date'>
              <span className='date__day'>15</span>
              <span className='date__month'>jun</span>
            </div>
            <img className='news-card__image' src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' alt='logo' />
          </div>
          <div className='news-card-footer'>
            <div className='news-card__title'>15 Restaurants in London and New-York and Bishkek</div>
            <div className='news-card__tag'>
              <span className='icon'>News</span>
              <span className='icon'>Comments</span>
            </div>
            <p className='news-card__description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</p>
            <button className='news-card-button'>read more</button>
          </div>
        </div>
        <div className='news-card'>
          <div className='news-card-header'>
            <div className='news-card__date'>
              <span className='date__day'>15</span>
              <span className='date__month'>jun</span>
            </div>
            <img className='news-card__image' src='https://img5.goodfon.com/wallpaper/big/0/de/devushka-ulybka-vzgliad-glaza-vesnushki-veronika-vonka-roma.jpg' alt='logo' />
          </div>
          <div className='news-card-footer'>
            <div className='news-card__title'>15 Restaurants in London and New-York and Bishkek</div>
            <div className='news-card__tag'>
              <span className='icon'>News</span>
              <span className='icon'>Comments</span>
            </div>
            <p className='news-card__description'>Fusce suscipit nulla consequat, convallis odio in, ornare arcu. Nulla sit amet eleifend</p>
            <button className='news-card-button'>read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;