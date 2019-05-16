import './subscribe.scss'

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className='subscribe-strip'>
            </div>
            <div className='subscribe-container'>
                <div className='subscribe-wrapper'>
                    <img
                        src='static/subscribemail.png'
                        className='subscribe__mail__icon'
                    />
                    <div className='subscribe-description' >
                        <h3 className='subscribe-description__title'>
                            <span
                                className='subscribe-description__title subscribe-description__title_thin'>
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
                        className='subscribe__input subscribe__input_name' />
                    <input
                        placeholder='Your Email'
                        className='subscribe__input subscribe__input_email' />
                    <button className='subscribe__button'>
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;