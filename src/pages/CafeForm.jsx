import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const CafeForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const backBtn = () => {
        navigate(-1);
    }
    const handleChangeValue = (e) => {
        const {name, value} = e.target;

        if (name === "name") setName(value);
        else if (name === "address") setAddress(value);
        else if (name === "phoneNumber") setPhoneNumber(value);
        else if (name === "openingTime") setOpeningTime(value);
        else if (name === "closingTime") setClosingTime(value);
        else if (name === "description") setDescription(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //기본 폼 제출 동작 막기

        if (!name || !address || !openingTime || !closingTime || !description) {
            let msg = "아래 항목을 필수 입력해야합니다 \n";
            if (!name) msg += "- 이름을 입력하세요. \n";
            if (!address) msg += "- 주소를 입력하세요. \n";
            if (!phoneNumber) msg += "- 전화번호를 입력하세요. \n";
            if (!openingTime) msg += "- 영업 시작 시간을 입력하세요. \n";
            if (!closingTime) msg += "- 영업 종료 시간을 입력하세요. \n";
            if (!description) msg += "- 설명을 입력하세요. \n";
            alert(msg);
            return; //작성하지 않았다면 돌아가기
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        formData.append("phoneNumber", phoneNumber);
        formData.append("openingTime", openingTime);
        formData.append("closingTime", closingTime);
        formData.append("description", description);

        axios
            .post("http://localhost:8080/api/cafes",
                formData,
                {
                    headers: {"Content-Type": "multipart//form-data"}
                }
            )
            .then((response) => {
                    console.log("데이터 추가 : " + response.data);
                    alert(name + "가 추가 되었습니다.");

                    //기존 데이터 삭제
                    setName("");
                    setDescription("");
                    setAddress("");
                    setClosingTime("");
                    setPhoneNumber("");
                    setOpeningTime("");
                }
            )
            .catch(
                (err) => {
                    alert("카페 데이터 저장 중 문제가 발생했습니다.")
                    console.log("CafeForm Error : ", err);
                }
            )
    };
    return (
        <div>
            <h1>새로운 카페 추가</h1>
            <form onSubmit={handleSubmit}>
                <label>이름</label>
                <input type="text"
                       name="name"
                       placeholder="카페 이름"
                       value={name}
                       onChange={handleChangeValue}/>
                <label>주소</label>
                <input type="text"
                       name="address"
                       placeholder="주소"
                       value={address}
                       onChange={handleChangeValue}/>
                <label>전화번호</label>
                <input type="text"
                       name="phoneNumber"
                       placeholder="카페 전화번호"
                       value={phoneNumber}
                       onChange={handleChangeValue}/>
                <label>영업 시작 시간</label>
                <input type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required/>

                <label>영업 종료 시간</label>
                <input type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required/>

                <label>설명</label>
                <input type="text"
                       name="description"
                       placeholder="카페 설명"
                       value={description}
                       onChange={handleChangeValue}/>
                <button type="submit">추가하기</button>
                <Link to={backBtn}>뒤로가기</Link>
            </form>
        </div>
    );
};

export default CafeForm;