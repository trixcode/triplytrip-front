import React, {useEffect} from 'react'
import './articleDescription.scss'


const ArticleDescription = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { articleDetail } = props;
  return (
    <section className='section-article-desctiption'>
      <div className='article-description-header'>
        <div dangerouslySetInnerHTML={{ __html: articleDetail.description }} className='article-description-header__text'></div>
      </div>
      <div className='article-description-middle'>
        <h2 className='article-description-middle__title'>
          {articleDetail.title}
            </h2>
        <img
          src={articleDetail.mainImage}
          alt=''
          className='article-description-middle__image' />
      </div>
      <div className='article-description-footer'>
        <div dangerouslySetInnerHTML={{ __html: articleDetail.extraDescription }} className='article-description-footer__text'></div>
        <span className='article-description-footer__tags'>
          <span className='bold'>Tags :</span>
          {articleDetail.tags && articleDetail.tags.map(tag => (
            ' ' + tag
          ))}

        </span>
      </div>
      <div className='article-description-buttons'>
        <div className='article-description-buttons__block'>
          <button className='button'>Прошлая статья</button>
          {/* <FontAwesomeIcon className='button-icon-less' icon={faLessThan} /> */}
        </div>
        <div className='article-description-buttons__block'>
          <button className='button'>Следующая статья</button>
          {/* <FontAwesomeIcon className='button-icon-greater' icon={faGreaterThan} /> */}
        </div>
      </div>
      <div className='article-description-advertising'>
        Delete
      </div>
    </section>
  )
}

export default ArticleDescription;