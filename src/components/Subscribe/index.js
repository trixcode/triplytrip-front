import './subscribe.scss'
import SubscribeFormContainer from '../../containers/SubscribeForm'

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className='subscribe-strip'>
            </div>
            <div className='subscribe-container container'>
                <div className='subscribe-mail'>
                    <img
                        src='static/subscribemail.png'
                        className='subscribe-mail__icon'
                    />
                    <div className='subscribe-description' >
                        <h3 className='subscribe-mail__description__title'>
                            <span
                                className='subscribe-description__title'>
                                Subscribe
                                <span className='subscribe-description__title
                                subscribe-description__title_bold'>
                                    To Newsletter
                                </span>
                            </span>
                        </h3>
                        <p
                            className='subscribe-description__text'>
                            Please provide your email and let us send all  new happenings about your city.
                        </p>
                    </div>
                </div>
                <SubscribeFormContainer />
            </div>
        </section>
    );
};

export default Subscribe;