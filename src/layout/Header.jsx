import { Link } from "react-router-dom";
import "./Layout.css";

const Header = () => {
    return (
        <header className="header">
            <h1>🍕 피자 스토어</h1>
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/add-pizza">피자 추가</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;