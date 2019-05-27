
import Article from '../Article'
import ArticleAside from '../ArticleAside'
import './articlesWrapper.scss';

const ArticlesWrapper = () => {

  return (
    <div className='articles-wrapper'>
      <div className='container'>
        <div className='articles-wrapper-main-content'>
          <div className='articles-wrapper-list'>
            <Article />
            <Article />
            <Article />
          </div>
          <div className='articles-wrapper-aside'>
            <ArticleAside />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ArticlesWrapper;