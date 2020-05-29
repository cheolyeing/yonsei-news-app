import React from "react";
import "./HeadTop.css";
import { Link } from "react-router-dom";

class HeadTop extends React.Component {
  render() {
    return (
      <div id="HeadTop">
        <div id="Default_Wrap">
          {/*바로가기*/}
          <ul id="hd-btn-link">
            <li>
              <a href="https://yonsei.ac.kr/">연세대학교 바로가기</a>
            </li>
            <li>
              <a href="http://ynb.yonsei.ac.kr/">연세대학교 대학언론사</a>
            </li>
          </ul>
          {/*로그인,회원가입*/}
          <ul id="hd-btn-login">
            <li>
              <Link to={"/Login"}>로그인</Link>
            </li>
            <li>
              <Link to={"/Member"}>회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeadTop;
