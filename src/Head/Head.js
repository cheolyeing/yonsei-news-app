import React from "react";
import HeadTop from "./HeadTop";
import HeadLogo from "./HeadLogo";

class Head extends React.Component {
  render() {
    return (
      <div>
        <HeadTop />
        <HeadLogo />
      </div>
    );
  }
}

export default Head;
