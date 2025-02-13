/*
package.json 에서
  "dependencies" 내부에
    "axios" 가 작성되어있다면 더이상 npm i axios를 하지 않아도 됨
    설치가 되어있기 때문에 my-app 폴더 내에서 언제든지 axios 를 사용할 수 있음
*/

import {useEffect, useState} from "react";
import axios from "axios";

const APIDog = () => {
    // axios 형식으로
    // https://api.thedogapi.com/v1/images/search
    //최초 1회 강아지 사진 랜덤 출력 후
    // 강아지 사진 새로고침 버튼을 클릭했을 때
    //새로운 강아지 사진이 보일 수 있도록 코드 설정
    const [dog, setDog] = useState(""); // const useState는 맨 위에 위치해야함

    const dogBtn = () => {
        axios
            .get('https://api.thedogapi.com/v1/images/search')
            .then(
                (res) => {
                    setDog(res.data[0].url);
                }
            )
            .catch(
                () => {
                    alert("API 에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.");
                }
            );
    }

    useEffect(() => {
        dogBtn();
    }, []);

    return (
        <div>
            <h1>랜덤 강아지 사진</h1>
            {dog ? <img src={dog}/> : <p>로딩 중</p>}
            <button onClick={dogBtn}>새로운 강아지 보기</button>
        </div>
    )
}

const APIRandomJoke = () => {
    const [setup, setSetup] = useState("");
    const [delivery, setDelivery] = useState("");
    useEffect(() => {

        // jokeapi = []로 이루어진 배열 형태가 아님!
        // category, setup, delivery
        axios
            .get("https://v2.jokeapi.dev/joke/Any")
            .then(
                (res) => {
                    setSetup(res.data.setup);
                    setDelivery(res.data.delivery)
                }
            )
    }, []);
    return (
        <>
            <h1>랜덤으로 농담 설정하기</h1>
            {setup ? <p>{setup}</p> : <p>로딩 중</p>}
            {delivery ? <p>{delivery}</p> : <p>로딩 중</p>}
        </>
    )
}

const APIUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    const userBtn = () => {
        axios
            .get("https://randomuser.me/api/")
            .then(
                (res) => {
                    setName(res.data.results[0].name.first + " " + res.data.results[0].name.last);
                    setEmail(res.data.results[0].email);
                    setPicture(res.data.results[0].picture.medium);
                }
            )
            .catch(
                () => {
                    alert("API 에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.")
                }
            );
    }

    useEffect(() => {
        userBtn();
    }, []);

    return (
        <div>
            <h1>유저 정보</h1>
            {name ? <p>{name}</p> : <p>로딩 중</p>}
            {email ? <p>{email}</p> : <p>로딩 중</p>}
            {picture ? <img src={picture}/> : <p>로딩 중</p>}
            <button onClick={userBtn}>새로운 유저 정보 보기</button>
        </div>
    )
}

const PracticeUseEffectAxios = () => {
    return (
        <div>
            <APIDog/>
            <APIRandomJoke/>
            <APIUser/>
        </div>
    )
}

export default PracticeUseEffectAxios;