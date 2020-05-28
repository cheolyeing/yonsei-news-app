import React from "react";
import "./HeadTop.css";
// 최상단
class HeadTop extends React.Component {
  render() {
    return (
      <div id="HeadTop">
        {/*바로가기*/}
        <ul class="hd-btn-link">
          <li>
            <a href="http://yonsei.ac.kr/">연세대학교 바로가기</a>
          </li>
          <li>
            <a href="http://ynb.yonsei.ac.kr/">연세대학교 대학언론사</a>
          </li>
        </ul>
        {/*로그인, 회원가입*/}
        <ul class="hd-btn-login">
          <li>
            <a>로그인</a>
          </li>
          <li>
            <a>회원가입</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeadTop;
