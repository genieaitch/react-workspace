import {useState} from "react";
import "./PizzaForm.css";
import axios from "axios";

/*
PizzaFormChapOne :
<input 태그 내부에 onChange = {(e) => {setData(e.target.value}}
와 같이 직접적으로 기능 작성 후 사용

PizzaFormChapTwo :
<input 태그 내부에 onChange = {handleChangeName}
처럼 기능명칭을 호출하여 간접적으로 기능 사용
*/

const PizzaFormChapTwo = () => {
    //java script 형식으로 상태 관리
    const [pizzaName, setPizzaName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleChangeValue = (e) => {
        // name = input 내에서 사용하는 속성명칭
        // value = input 내에서 사용하는 속성명칭
        const {name, value} = e.target; // name 이나 value 로 작성된 속성에 특정 행위가 발생한다는 표기 작성

        //위에서 작성한 값 변환이 일어났을 경우
        // 만약에 input 속성 name 에 pizzaName 이 존재한다면 값 변경

        if(name === "pizzaName") setPizzaName(value);
        else if(price === "price") setPrice(value);
        else if(description === "description") setDescription(value);
    }


    const handleAddPizza = () => {
        // 피자이름 / 가격 / 작성하지 않은 설명이 존재한다면
        if (!pizzaName || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!pizzaName) msg += " - 피자 이름을 입력하세요. \n"
            if (!price) msg += " - 피자 가격을 입력하세요. \n"
            if (!description) msg += " - 피자 설명을 입력하세요. \n"
            alert(msg);
            //alert(`모든 값을 입력하세요.`);
            return; //axios 에서 DB 저장하지 못하게 돌려보내기
        }

        // formData 외부에 작성 → 17~20 번 코드에 작성된 null값으로 설정
        // 버튼 클릭할 때 사용자가 최종으로 input 에 작성한 값을 다시 호출
        // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해주는 JavaScript 기능 사용
        // 모든 값이 입력이 됐는지 확인 후에 데이터 가져오기 설정 → 메모리 관리
        const formData = new FormData();
        /*
        formData.append("controller를 통해 DB에 저장될 변수이름", controller 에 전달될 값이 들어있는 변수이름);
         formData.append("name", name);
        */
        formData.append("name", pizzaName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("imagePath", image);
        
        axios
            .post("http://localhost:8080/api/pizzas",
                formData,
                {
                    headers: {"Content-Type": "multipart//form-data"}
                }
            )
            .then(
                (response) => {
                    console.log("데이터 추가 : " + response.data)
                    alert(pizzaName + "가 추가되었습니다.");

                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setPizzaName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                }
            )
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log("Pizza Form error : ", err);
                }
            )
    };

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            {/*
            value 는 DB에 값을 저장할 때 필수로 작성하지 않아도 됨
            value 는 값 초기화 설정을 하기 위해 작성
            만약에 상품 추가를 작성하고 DB 에 저장이 완료되었을 경우
            목록페이지로 이동시킨다면 value 필요하지 않음

            왜냐하면 실질적으로 DB에 저장할 때의 값은 onChange 가
            e (event = 행위) 에 대한 target (특정) value(값) 을
            set 변수 이름에 변경된 값을 실시간으로 저장해주고
            set 변수 이름에 저장된 값은 변수이름으로 전달되어 DB에 저장
            onChange={handleChangeValue}/>
            */}
            <label>피자이름</label>
            <input type="text"
                   name="pizzaName"
                   placeholder="피자이름"
                   value={pizzaName}
                   onChange={handleChangeValue}/>
            <label>피자가격</label>
            <input type="number"
                   name="price"
                   placeholder="피자가격"
                   value={price}
                   onChange={handleChangeValue}/>

            <textarea placeholder="피자설명"
                      name="description"
                      value={description}
                      onChange={handleChangeValue}>
            </textarea>

            <label>사진추가</label>
            {/*
            input 태그에서 type="file" 기능 설정할 때
            두 개 이상의 파일을 가져옴을 인지할 수 있기 떄문에
            e.target.files[0] 와 같은 형식으로 이미지 데이터들 중에서 맨 앞에 있는 1가지만 가져오겠다 설정
            */}
            <input type="file"
                   onChange={(e) => setImage(e.target.files[0])}/>
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

const PizzaFormChapOne = () => {
    //java script 형식으로 상태 관리
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해주는 JavaScript 기능 사용
    const formData = new FormData;
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imagePath", image);
    const handleAddPizza = () => {
        // 피자이름 / 가격 / 작성하지 않은 설명이 존재한다면
        if (!name || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!name) msg += " - 피자 이름을 입력하세요. \n"
            if (!price) msg += " - 피자 가격을 입력하세요. \n"
            if (!description) msg += " - 피자 설명을 입력하세요. \n"
            alert(msg);
            //alert(`모든 값을 입력하세요.`);
            return; //axios 에서 DB 저장하지 못하게 돌려보내기
        }
        axios
            .post("http://localhost:8080/api/pizzas",
                formData,
                {
                    headers: {"Content-Type": "multipart//form-data"}
                }
            )
            .then(
                (response) => {
                    console.log("데이터 추가 : " + response.data)
                    alert(name + "가 추가되었습니다.");

                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                }
            )
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log("Pizza Form error : ", err);
                }
            )
    };

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            <label>피자이름</label>
            <input type="text"
                   placeholder="피자이름"
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <label>피자가격</label>
            <input type="number"
                   placeholder="피자가격"
                   onChange={(e) => setPrice(e.target.value)}/>

            <textarea placeholder="피자설명"
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            <label>사진추가</label>
            {/*
            input 태그에서 type="file" 기능 설정할 때
            두 개 이상의 파일을 가져옴을 인지할 수 있기 떄문에
            e.target.files[0] 와 같은 형식으로 이미지 데이터들 중에서 맨 앞에 있는 1가지만 가져오겠다 설정
            */}
            <input type="file"
                   onChange={(e) => setImage(e.target.files[0])}/>
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

export default PizzaFormChapTwo;