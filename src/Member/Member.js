import React from "react";
import { Link } from "react-router-dom";

class Member extends React.Component {
  render() {
    return (
      <div id="Member">
        <h1 id="logo">
          <Link to={"/"}></Link>
        </h1>
        <span className="title">회원가입</span>
        <p id="guide">다음 중 어디에 해당되는지 선택해 주시기 바랍니다.</p>
        <div className="choice">
          <Link to={"/memberAdult"}>
            <strong>일반회원</strong>
            <p>다양한 정보의 뉴스와 자료를 확인하실 수 있습니다.</p>
            <i>icon</i>
          </Link>
        </div>
        <div>
          <Link to={"/memberChild"}>
            <strong>어린이 회원</strong>
            <p>만 14세 미만은 법률에 의거하여 보호자의 동의가 필요합니다.</p>
            <i>icon</i>
          </Link>
        </div>
        <div>
          <strong>만 14세 미만 이라면?</strong>
          <p>
            만 14세 미만은 법률에 의거하여 보호자(법적대리인)의 동의가
            필요합니다.
            <br></br>
            절차에 따라 회원가입을 모두 마치고 보호자동의서를 다운받아 작성하신
            후 아래 팩스 또는 이메일로 접수하시면 됩니다.
            <br></br>
            팩스 : 000-222-2222 / 이메일 : webmaster@chunchu.yonsei.ac.kr
          </p>
        </div>
      </div>
    );
  }
}

export default Member;
