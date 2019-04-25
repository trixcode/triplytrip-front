import './subscribe.scss'

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className='subscribe-strip'>
            </div>
            <div className='subscribe-wraper'>
                <img
                    src='static/subscribemail.png'
                    className='subscribe__mail__icon'
                />
                <div className='subscribe-container'>
                    <div className='subscribe-description' >
                        <h3 className='subscribe-description__title'>
                            <span
                                className='subscribe-description__title thin'>
                                Subscribe
                            </span>
                            To Newsletter
                        </h3>
                        <span
                            className='subscribe-description__text'>
                            Please provide your email and let us send all  new happenings about your city.
                        </span>
                    </div>
                    <input
                        placeholder='Your Name'
                        className='subscribe__input name' />
                    <input
                        placeholder='Your Email'
                        className='subscribe__input email' />
                    <button className='subscribe__button'>
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;