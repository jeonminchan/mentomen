import { useState } from "react";

const PassWordChange = () => {
  const [passWord, setPassWord] = useState("");

  const onChangePassWord = (event) => {
    setPassWord(event.target.value);
    console.log(passWord);
  };

  const onSubmitPassWord = (event) => {
    alert(`변경된 비밀번호 : ${passWord}`);
  };

  return (
    <>
      <div>
        <h1>비밀번호 변경하기</h1>
        <input onChange={onChangePassWord}></input>
        <button onKeyDown={onSubmitPassWord}>비밀번호 변경</button>
      </div>
    </>
  );
};

export default PassWordChange;
