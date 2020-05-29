import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  handleClick() {
    console.log("로그인 시도");
  }
  render() {
    return (
      <div id="login">
        <div className="member-wrap border-box">
          <h1 className="logo">
            <Link to={"/"}></Link>
          </h1>
          <fieldset className="log-form">
            <form name="loginForm">
              <div className="member-posi">
                <label className="layer">아이디</label>
                <input
                  name="user_id"
                  type="text"
                  tabIndex="1"
                  className="user_id submit-input border-box"
                ></input>
              </div>
              <div className="member-posi">
                <label className="layer">비밀번호</label>
                <input
                  name="user_pw"
                  type="password"
                  tabIndex="2"
                  className="user_pw submit-input border-box"
                ></input>
              </div>
              <button
                className="login_submit"
                tabIndex="3"
                onClick={this.handleClick}
              >
                로그인
              </button>
            </form>
          </fieldset>
          <ul className="log-menu">
            <li>
              <Link to={"/"}>처음으로</Link>
            </li>
            <li>
              <Link to={"/member"}>회원가입</Link>
            </li>
            <li>
              <Link to={"/FindInfo"}>아이디/비밀번호 찾기</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
