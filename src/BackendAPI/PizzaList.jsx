import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([])

    /*
        () => {}
        소괄호나 중괄호 내부에 들어갈 변수이름이나 기능이 하나만 존재한다면
        괄호 생략 가능
        변수 이름이나 기능이 두 가지 이상 존재한다면
        괄호를 필수로 작성
        예시 :
                useEffect (() => {}, [])
                useEffect (event => {}, []) → 소괄호 생략
                useEffect (() => alert("안녕!"), []) → 중괄호 생략
                useEffect (event => alert(event), []) → 소괄호, 중괄호 모두 생략
                useEffect ((event) => {alert(event)}, []) → 소괄호, 중괄호 모두 사용
                
                useEffect ((event, xyz) => {setPizzas("피자") alert(event)}, []) → 소괄호, 중괄호 모두 생략불가

                .then(() => {})
                .then((res) => {setPizzas(res.data}) → 소괄호, 중괄호 모두 사용
                .then(res => {setPizzas(res.data}) → 소괄호 생략
                .then((res) => setPizzas(res.data) → 중괄호 생략
                .then(res => setPizzas(res.data) → 소괄호, 중괄호 모두 생략
                
                .then((res, rep) => {setPizzas(res.data)} alert("데이터를 성공적으로 호출했습니다.") → 소괄호, 중괄호 모두 생략 불가
     */
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/pizzas")
            .then( //8080/api/pizzas 에서 데이터 가져오길 성공했다면
                (res) => { //res = response = 응답
                    setPizzas(res.data); //res.data = get 으로 전달받은 데이터를 → setPizzas 에 리스트로 저장
                })
            .catch(() => {
                alert("백엔드에서 데이터 가져오기를 실패했습니다.")
            })
    }, []);
    return (
        <div>
            <h2>🍕 피자 메뉴</h2>

            {/* 1. <ul> <li> 태그를 <div> <div> 태그로 변경해서 설정

            2. map(()) 형식을 map({}) 중괄호 형식으로 변환*/}
            <div>
                {/* axios 로 가져온 피자 목록 map 으로 전달받아 보여주기 */}
                {pizzas.map((pizza) => {
                        //pizzas 데이터를 가져와서 특정 설정을 진행할 때 작성
                        return (
                            //<li key={index}> = 0번부터 시작
                            <div key={pizza.id}>
                                <h3>{pizza.name}</h3>
                                <p>가격 : {pizza.price}원</p>
                                <p>{pizza.description}</p>
                                {/* react 는 a 태그 대신에 Link 태그를 이용하여 이동하는 경로설정 */}
                                {/*
                                경로 이동의 경우
                                react-router-dom 을 설치하여 Link 를 사용할 수 있음
                                */}
                                <Link to={`/pizzas/detail/${pizza.id}`}>
                                    <button>상세보기</button>
                                </Link>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}
export default PizzaList;