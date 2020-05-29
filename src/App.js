import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./Member/Login";
import Member from "./Member/Member";
import MemberAdult from "./Member/MemberAdult";
import MemberAdultAdd from "./Member/MemberAdultAdd";
import MemberChild from "./Member/MemberChild";
import MemberChildAdd from "./Member/MemberChildAdd";
import FindInfo from "./Member/FindInfo";
import Table from "./Table";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Table} />
      <Route path="/login" component={Login} />
      <Route path="/member" component={Member} />
      <Route path="/memberAdult" component={MemberAdult} />
      <Route path="/memberAdult-Add" component={MemberAdultAdd} />
      <Route path="/memberChild" component={MemberChild} />
      <Route path="/memberChild-Add" component={MemberChildAdd} />
      <Route path="/findInfo" component={FindInfo} />
    </HashRouter>
  );
}

export default App;
