import './componentTitle.scss';

const ComponentTitle = props => {
    const {name, text} = props;
    return (
        <div className="component-title">
            <h2 
                className='places__title__name'>
                {name}
            </h2>
            <span 
                className='places__title__text'>
                {text}
            </span>
        </div>
    )    
}

export default ComponentTitle;