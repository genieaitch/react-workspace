function PraticeUseState() {
    return (
        <div>
            <UseStateOne/>
        </div>
    )
}

function UseStateOne() {
// 사용자가 입력한 텍스트를 화면에 표시하는 컴포넌트 생성
    //text 라는 변수 이름을 사용해서 값 설정
    // 변수이름 : text

    const text =
    return (
        <div>
            <input type="text" placeholder="텍스트를 입력하세요."
                   value={text}
                   onChange={(e) => (e.target.value)}
            />
        </div>
    )
}

function UseStateTwo() {
// 랜덤으로 숫자 생성하기
    // 변수이름 : number
    //랜덤숫자기능
    const randumBtn = Math.floor(Math.random() * 100) + 1;
    return(
        <div>
            <p>랜던 숫자 : {}</p>
            <button onClick={randumBtn}>랜덤숫자생성</button>
        </div>
    )
}

export default UseStateOne;