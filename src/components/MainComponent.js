import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import Menu from "./menu";
import Ndetail from "./ChitietNV";
import Nhanvien from "./nhanvien";
import Pban from "./Phongban";
import Bangluong from "./Bangluong";
import Timkiem from "./Timkiem";
//import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ThemNhanvien from "./ThemNhanvien";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisT: STAFFS,
      Mem: DEPARTMENTS,
      value: "111111111111",
      valueOp: "",
      valueBl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBluong = this.handleChangeBluong.bind(this);
  }

  handleChange() {
    // this.setState({ value: document.getElementById("hhh").value });
    //this.setState({ valueOp: document.getElementById("opv").value });
  }
  handleChangeBluong() {
    this.setState({ valueBl: document.getElementById("tlv").value });
  }

  render() {
    const HomePageNV = () => {
      return <Nhanvien />;
    };

    const NvienWithId = ({ match }) => {
      return (
        <Ndetail
          value={this.state.value}
          Mvien={
            this.state.lisT.filter(
              (nien) => nien.id === parseInt(match.params.nvId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div className="container ">
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/home" component={HomePageNV}></Route>
            <Route path="/them" component={ThemNhanvien}></Route>
            <Route
              exact
              path="/menu"
              component={() => <Menu lisT={this.state.lisT} />}
            />
            <Route path="/menu/:nvId" component={NvienWithId}></Route>
            <Route
              path="/phongban"
              component={() => <Pban Mem={this.state.Mem} />}
            ></Route>

            <Route
              path="/bangluong"
              component={() => (
                <Bangluong
                  lisT={this.state.lisT}
                  valueBl={this.state.valueBl}
                  handleChangeBluong={this.handleChangeBluong}
                />
              )}
            ></Route>
            <Route
              path="/timkiem"
              component={() => <Timkiem lisT={this.state.lisT} />}
            ></Route>
            <Redirect to="/home" />
          </Switch>
        </HashRouter>

        <Footer />
      </div>
    );
  }
}

export default Main;
