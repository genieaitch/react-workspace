import React from "react";

const PracticePropsDefault = () => {
    return(
        <div>
            <NameDisplay/>
            <AgeDisplay/>
            <MessageDisplay/>
            <ColorBox/>
            <CustomButton/>
        </div>
    )
}

const NameDisplay = ({name}) => {
    return (
        <div>
            <h2>이름: {name}</h2>
        </div>
    );
};

// 기본값 설정
NameDisplay.defaultProps={
    name : "이름 없음"
}

const AgeDisplay = ({age}) => {
    return (
        <div>
            <h2>나이: {age}세</h2>
        </div>
    );
};

// 기본값 설정
AgeDisplay.defaultProps={
    age: 20
}

const MessageDisplay = ({message}) => {
    return (
        <div>
            <p>📢 {message}</p>
        </div>
    );
};

// 기본값 설정
MessageDisplay.defaultProps={
    message : "기본 메시지입니다."
}

const ColorBox = ({color}) => {
    return (
        <div style={{ backgroundColor: color, width: "100px", height: "100px" }}>
            🎨 색상 박스
        </div>
    );
};

// 기본값 설정
ColorBox.defaultProps={
    color : "gray" //grey = gray
}

const CustomButton = ({text}) => {
    return (
        <button>{text}</button>
    );
};

// 기본값 설정
CustomButton.defaultProps={
    text : "클릭하세요"
}

export default PracticePropsDefault;