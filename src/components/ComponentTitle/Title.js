import './componentTitle.scss';

const ComponentTitle = props => {
    const {name, text} = props;
    return (
        <section className="section-title-wrapper">
            <h2 
                className='section-title__name'>
                {name}
            </h2>
            <span 
                className='section-title__text'>
                {text}
            </span>
        </section>
    )    
}

export default ComponentTitle;