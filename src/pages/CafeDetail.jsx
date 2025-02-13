import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const CafeDetail = () => {
    const {id} = useParams();
    const [cafe, setCafe] = useState(null);
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/cafes/${id}`)
            .then(
                (response) => {
                    setCafe(response.data)
                }
            )
            .catch(
                (err) => {
                    alert("에러가 발생했습니다")
                    console.log("CafeDetail Error : " + err);
                }
            )
    }, []);
    return (
        <div>
            {
                cafe ? (
                    <div>
                        <h1>{cafe.name} 상세 정보</h1>
                        <p>📍 주소: {cafe.address}</p>
                        <p>📞 전화번호: {cafe.phoneNumber}</p>
                        <p>🕒 영업시간: 오픈 {cafe.openingTime} - 마감 {cafe.closingTime}</p>
                        <p>📖 설명: {cafe.description}</p>
                        <button onClick={backBtn}>돌아가기</button>
                    </div>
                ) :
                    (
                        <>
                        (<p>로딩 중...</p>)
                        </>
                    )
            }
        </div>
    );
};

export default CafeDetail;
