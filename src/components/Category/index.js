
import './category.scss';

const Category = (props) => {
    return (
      <div class="category-container ">
        <div class="category container-Tynai">
          <div class="category-block first-block">
            <img class="category-block__image"></img>
            <span class="category-block__name">Hotel</span>
          </div>
          <div class="category-block">
            <img class="category-block__image"></img>
            <span class="category-block__name">Dinner</span>
          </div>
          <div class="category-block">
            <img class="category-block__image"></img>
            <span class="category-block__name">Destination</span>
          </div>
          <div class="category-block">
            <img class="category-block__image"></img>
            <span class="category-block__name">Coffee</span>
          </div>
          <div class="category-block last-block">
            <img class="category-block__image"></img>
            <span class="category-block__name">Club and Bear</span>
          </div>
        </div>
      </div>
    )
}

export default Category;