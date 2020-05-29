import React from "react";
import { Link } from "react-router-dom";

class MemberAdultAdd extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={"/"}>연세춘추</Link>
        </h1>
        <span>회원가입</span>
        <p>회원가입을 통해 다양한 혜택을 누리시기 바랍니다.</p>
        <form>
          <div>
            <input placeholder="아이디"></input>
            <button>중복확인</button>
          </div>
          <div>
            <input placeholder="비밀번호"></input>
          </div>
          <div>
            <input placeholder="비밀번호 확인"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default MemberAdultAdd;
