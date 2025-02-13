import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Cafe Finder ☕</h1>
            <Link to="/cafes">카페 목록 보기</Link>
            <br />
            <Link to={"/cafes/add"}>새 카페 추가</Link>
        </div>
    );
};

export default Home;