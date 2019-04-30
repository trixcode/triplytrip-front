import './articleDescription.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

const ArticleDescription = (props) => {
  return (
    <section className='section-article-desctiption'>
      <div className='article-description-header'>
        <p className='article-description-header__text'>
          Fusce feugiat, ligula suscipit accumsan consectetur, libero dolor accumsan urna, ac dapibus ex urna vitae lacus. Quisque id suscipit mi, vel mollis dui. Aliquam ullamcorper cursus tellus et imperdiet. Phasellus sodales sapien tempus risus euismod placerat. Aenean in ipsum nec massa cursus euismod. Nam ultricies neque ex, vitae convallis eros lacinia vitae. Ut quis magna ut velit tristique euismod. Phasellus viverra enim non tortor facilisis consequat. Ut odio nunc, malesuada at nisi in, aliquet aliquet nulla. Phasellus sit amet lacinia urna, in lacinia arcu. Fusce a est luctus, eleifend augue vel, vehicula velit.
              <br />
          <br />
          Pellentesque gravida fermentum justo, vel bibendum nunc faucibus eget. Ut pellentesque turpis nec libero mattis, sed aliquet augue maximus. Ut quis fermentum erat. Sed non massa magna. Donec tincidunt commodo massa, quis lacinia libero congue a. Integer posuere velit quis ex blandit, id posuere neque laoreet. Donec tincidunt commodo massa, quis lacinia libero congue a. Integer posuere velit quis ex blandit, id posuere neque laoreet. Donec tincidunt commodo massa, quis lacinia libero congue a. Integer posuere velit quis ex blandit, id posuere neque laoreet.
              <br />
          <br />
          Ut bibendum quam ut magna dapibus finibus. Suspendisse sed dignissim metus, ut tristique enim. Nunc non finibus justo, at cursus risus. Aenean in mauris eu neque varius porttitor eu eget ligula. Mauris ac elit nec justo lobortis consequat. Nunc sagittis rhoncus velit in iaculis.
            </p>
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
        <p className='article-description-footer__text'>
          Fusce feugiat, ligula suscipit accumsan consectetur, libero dolor accumsan urna, ac dapibus ex urna vitae lacus. Quisque id suscipit mi, vel mollis dui. Aliquam ullamcorper cursus tellus et imperdiet. Phasellus sodales sapien tempus risus euismod placerat. Aenean in ipsum nec massa cursus euismod. Nam ultricies neque ex, vitae convallis eros lacinia vitae. Ut quis magna ut velit tristique euismod. Phasellus viverra enim non tortor facilisis consequat. Ut odio nunc, malesuada at nisi in, aliquet aliquet nulla. Phasellus sit amet lacinia urna, in lacinia arcu. Fusce a est luctus, eleifend augue vel, vehicula velit.
              <br />
          <br />
          Pellentesque gravida fermentum justo, vel bibendum nunc faucibus eget. Ut pellentesque turpis nec libero mattis, sed aliquet augue maximus. Ut quis fermentum erat. Sed non massa magna. Donec tincidunt commodo massa, quis lacinia libero congue a. Integer posuere velit quis ex blandit, id posuere neque laoreet. Ut bibendum quam ut magna dapibus finibus. Suspendisse sed dignissim metus, ut tristique enim. Nunc non finibus justo, at cursus risus. Aenean in mauris eu neque varius porttitor eu eget ligula.
            </p>
        <span className='article-description-footer__tags'>
          <span className='bold'>Tags :</span> Beaty, Life, Music, Skin Care, Travel
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