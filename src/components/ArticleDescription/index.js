import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import './articleDescription.scss'
import React from 'react'


const ArticleDescription = (props) => {
  const { articleDetail } = props;
  return (
    <section className='section-article-desctiption'>
      <div className='article-description-header'>
        <div dangerouslySetInnerHTML={{ __html: articleDetail.description }} className='article-description-header__text'></div>
      </div>
      <div className='article-description-middle'>
        <h2 className='article-description-middle__title'>
          Heading - Pellentesque gravida fermentum
            </h2>
        <div className='article-description-middle__image'>
          Deleate
            </div>
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
          <button className='button'>previos article</button>
          <FontAwesomeIcon className='button-icon-less' icon={faLessThan} />
        </div>
        <div className='article-description-buttons__block'>
          <button className='button'>next article</button>
          <FontAwesomeIcon className='button-icon-greater' icon={faGreaterThan} />
        </div>
      </div>
      <div className='article-description-advertising'>
        Deleate
      </div>
    </section>
  )
}

export default ArticleDescription;