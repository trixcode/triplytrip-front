
import './header.scss';

const Header = (props) => {
    const {text} = props;
    return (
        <div className="test">{text}</div>
    )
}

export default Header;