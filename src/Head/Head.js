import React from "react";
import HeadTop from "./HeadTop";
import HeadLogo from "./HeadLogo";

class Head extends React.Component {
  render() {
    return (
      <header id="Head">
        <HeadTop />
        <HeadLogo />
      </header>
    );
  }
}

export default Head;
