import './articleSidebar.scss';


const ArticleSidebar = (props) => {
  return (
    <section className='section-article-sidebar'>
      <div className='article-sidebar-wrapper'>
        <div className='article-sidebar-search'>
          <input className='search' placeholder='search' />
        </div>
        <div className='article-sidebar-categoies'>
          <div className='article-sidebar-title'>
            <div className='article-sidebar-title__box'></div>
            <h4 className='article-sidebar-title__name'>categoies</h4>
          </div>
          <ul className='article-sidebar-categories__item'>
            <li className='article-sidebar-categories__list'>
              <a href='#' className='article-sidebar-categories__link'>coffee</a>
            </li>
            <li className='article-sidebar-categories__list'>
              <a href='#' className='article-sidebar-categories__link'>news</a>
            </li>
            <li className='article-sidebar-categories__list'>
              <a href='#' className='article-sidebar-categories__link'>tips  tricks</a>
            </li>
            <li className='article-sidebar-categories__list'>
              <a href='#' className='article-sidebar-categories__link'>uncategorized</a>
            </li>
          </ul>
        </div>
        <div className='article-sidebar-latest'>
          <div className='article-sidebar-title'>
            <div className='article-sidebar-title__box'></div>
            <h4 className='article-sidebar-title__name'>latest news</h4>
          </div>
          <div className='article-sidebar-latest__news'>
            <img className='article-sidebar-latest__news--image' src='static/latesNews.png' alt='' />
            <div className='article-sidebar-latest__news-text'>
              <a href='#' className='article-sidebar-latest__news-text--description'>
                15 restaurants in london and new york
              </a>
              <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
            </div>
          </div>
          <div className='article-sidebar-latest__news'>
            <img className='article-sidebar-latest__news--image' src='static/latesNews.png' alt='' />
            <div className='article-sidebar-latest__news-text'>
              <a href='#' className='article-sidebar-latest__news-text--description'>
                15 restaurants in london and new york
              </a>
              <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
            </div>
          </div>
          <div className='article-sidebar-latest__news'>
            <img className='article-sidebar-latest__news--image' src='static/latesNews.png' alt='' />
            <div className='article-sidebar-latest__news-text'>
              <a href='#' className='article-sidebar-latest__news-text--description'>
                15 restaurants in london and new york
              </a>
              <span className='article-sidebar-latest__news-text--date'>april 30, 2019</span>
            </div>
          </div>
        </div>
        <div className='article-sidebar-newsletter'>
          <div className='article-sidebar-title'>
            <div className='article-sidebar-title__box'></div>
            <h4 className='article-sidebar-title__name'>newsletter</h4>
          </div>
          <span className='article-sidebar-newsletter__text'>
            Subscribe us and never miss our new articles
          </span>
          <input className='article-sidebar-newsletter__email' placeholder='email address' />
        </div>
      </div>
    </section>
  )
}

export default ArticleSidebar;