
import './articleTitle.scss';

const ArticleTitle = (props) => {
  return (
    <div className="article-title">
      <div className="container">
        <h2 className="article-title__name">15 Restaurants in London and New York</h2>
        <div className="article-tags">
          <div className="aricle-tags__wrapper">
            <span className="aricle-tags__title">Posted On</span>
            <span className="aricle-tags__subtitle">May 09, 2017</span>
          </div>
          <div>
            <span className="aricle-tags__title">Category</span>
            <span className="aricle-tags__subtitle">Hotel</span>
          </div>
          <div>
            <span className="aricle-tags__title">Comment</span>
            <span className="aricle-tags__subtitle">Icon</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleTitle;