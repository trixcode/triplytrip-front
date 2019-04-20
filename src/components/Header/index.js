
import './header.scss';

const Header = (props) => {
    const {text} = props;
    return (
        <div className="container">{text}</div>
    )
}

export default Header;