function App() {
    return (
        <div>
            <h1>리액트 APP 메인 페이지 입니다. ^^</h1>
        </div>
    );
}

function AppDescription() {
    // 자바 스크립트를 작성하는 공간

    // return(<div>내에 html 코드 작성</div>)
    // return() 소괄호 안에 반드시 <div></div> 나 <></> 로 html 전체 감싸기를 해준 다음 html 태그 작성
    return (
        <div>
            <h1>App.js 메인 페이지</h1>
            <pre>
                리액트에서 파일을 만들 때 규칙
                1. 파일명의 맨 첫글자는 무조건 대문자
                2. return () 소괄호 내에 <div></div> 나 <></> 활용해서 특정 파일의 html 시작과 끝을 감싸는 태그 설정
                <div></div> 나 <></> : 어디서부터 어디까지가 App.js 파일의 html 코드이다. 표기
                3. export default 기능명칭; 을 작성해야지 외부에서 특정파일의 특정기능을 사용할 수 있음
            </pre>
        </div>
    );
}

export default AppDescription;
/*
만약에 AppDescription 기능을 App.js 메인 기능으로 보여주고 싶다면 아래와 같이 작성
export default AppDescription;

만약에 App 기능을 App.js 메인 기능으로 보여주고 싶다면 아래와 같이 작성
export default App;

export default 는 한 js 파일 당 최초 1회만 작성 가능

function 기능명칭1번(){
}

function 기능명칭2번(){
}

function 기능명칭3번(){
}

개발자가 기본적으로 보여주고자 하는 기능명칭을
export default 기능명칭; 작성해서 사용하면 됨
*/