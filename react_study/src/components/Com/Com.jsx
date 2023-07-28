function Com() {
  const name = "뤼액트";

  const style = {
    backgroundColor: "red",
    color: "blue",
  };
  return (
    <div>
      {/* 자바스크립트 값을 JSX안에서 렌더링 하기 */}
      <h1>컴포넌트 배우기</h1>
      <div style={style}>{name}</div>

      {/* 조건부 연산자(삼항연산자) */}
      {name === "리액트" ? <h1>리액트 입니다</h1> : <h2>리액트가 아닙니다</h2>}
      {/* {조건 === "" ? true : false} */}

      {/* And연산자를 사용한 조건부 렌더링 */}
      {name === "리액트" ? <h1>리액트 입니다</h1> : null}

      {name === "리액트" && <h1>리액트 입니다</h1>}
    </div>
  );
}

export default Com;
