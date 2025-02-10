const ChapArrowFunction = () => {
    const addOne = (a, b) => {
        return a + b;
    }

    //return 에서 a+b; 단일 코드만 작성하기 때문에
    // {}와 return 사용 가능
    const addTwo = (a, b) => a + b;

    return (
        <div>
            <h2>화살표 함수 선언 방식</h2>
            <p> 2+3 = {addOne(2, 3)}</p>
            <p> 2+3 = {addTwo(2, 3)}</p>
        </div>
    )
}

export default ChapArrowFunction;