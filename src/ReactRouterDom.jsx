// 파일을 따로 만들어서 설정하면 설정이 되지 않음
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CafeList from "./pages/CafeList";
import CafeDetail from "./pages/CafeDetail";
import CafeForm from "./pages/CafeForm";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

function ReactRouterDom() {
return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cafes" element={<CafeList />} />
            <Route path="/cafes/:id" element={<CafeDetail />} />
            <Route path="/cafes/add" element={<CafeForm />} />
        </Routes>
        <Footer />
    </Router>
);
}

export default ReactRouterDom;