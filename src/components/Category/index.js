
import './category.scss';

const Category = (props) => {
  return (
    <div className="category-wrapper">
      <div className="category-container ">
        <div className="category container-Tynai">
          <div className="category-block first-block">
            <img className="category-block__image"></img>
            <span className="category-block__name">Hotel</span>
          </div>
          <div className="category-block">
            <img className="category-block__image"></img>
            <span className="category-block__name">Dinner</span>
          </div>
          <div className="category-block">
            <img className="category-block__image"></img>
            <span className="category-block__name">Destination</span>
          </div>
          <div className="category-block">
            <img className="category-block__image"></img>
            <span className="category-block__name">Coffee</span>
          </div>
          <div className="category-block last-block">
            <img className="category-block__image"></img>
            <span className="category-block__name">Club and Bear</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Category;