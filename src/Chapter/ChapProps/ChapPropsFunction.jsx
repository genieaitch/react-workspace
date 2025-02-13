const ChapPropsFunction = () =>{
    return(
        <div>
            <Parent/>
        </div>
    )
}

const Child = ({버튼전달}) => {
    return(
        <button onClick={버튼전달}>부모에게 받은 기능</button>
    )
}

const ChildName = ({이름, 버튼전달}) => {
    return(
        <div>
            <h3>{이름}</h3>
        <button onClick={버튼전달}>부모에게 받은 기능</button>
        </div>
    )
}

const Parent = () => {
    const 클릭버튼 = () => {
        alert("버튼이 클릭되었습니다.");
    }

    return(
        <div>
            <h1>부모 → 자식 함수 전달</h1>
            <Child 버튼전달={클릭버튼}/>
            <ChildName 이름="홍길동" 버튼전달={클릭버튼}/>
        </div>
    )
}

export default ChapPropsFunction;