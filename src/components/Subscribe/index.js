import './subscribe.scss'
import SubscribeFormContainer from '../../containers/SubscribeForm'
import React from 'react'
const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className='subscribe-strip'>
            </div>
            <div className='subscribe-container container'>
                <div className='subscribe-mail'>
                    <img
                        alt=""
                        src='static/subscribemail.png'
                        className='subscribe-mail__icon'
                    />
                    <div className='subscribe-description' >
                        <h3 className='subscribe-mail__description__title'>
                            <span
                                className='subscribe-description__title'>
                                Подпишитесь <span className='subscribe-description__title
                                subscribe-description__title_bold'>
                                     На Наши Новости
                                </span>
                            </span>
                        </h3>
                        <p
                            className='subscribe-description__text'>
                            Пожалуйста, укажите свой адрес электронной почты и позвольте нам отправлять все новости о вашем городе.

                        </p>
                    </div>
                </div>
                <SubscribeFormContainer />
            </div>
        </section>
    );
};

export default Subscribe;