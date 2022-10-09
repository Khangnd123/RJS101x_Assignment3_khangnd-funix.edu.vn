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
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
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
    this.setState({ value: document.getElementById("hhh").value });
    this.setState({ valueOp: document.getElementById("opv").value });
  }
  handleChangeBluong() {
    this.setState({ valueBl: document.getElementById("tlv").value });
  }

  render() {
    function XepTheo({ a }) {
      if (a === "") {
        return <div>Không có giá trị sắp xếp</div>;
      } else if (a === "id") {
        return <div>Mã nhân viên</div>;
      } else if (a === "annualLeave") {
        return <div>AnnualLeave</div>;
      } else if (a === "overTime") {
        return <div>OverTime</div>;
      } else {
        return <div>Không xác định</div>;
      }
    }
    const Fim = () => {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>

              <BreadcrumbItem active>Tìm kiếm</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Tìm kiếm </h3>
              <hr></hr>
            </div>
          </div>
          <div>
            <label>
              <select id="opv">
                <option value="">Sắp xếp theo</option>
                <option value="id">mã nhân viên</option>
                <option value="annualLeave">annualLeave</option>
                <option value="overTime">overTime</option>
              </select>
            </label>
            <XepTheo a={this.state.valueOp} />

            <label>
              <input type="text" id="hhh" />
            </label>
            <input type="submit" value="Submit" onClick={this.handleChange} />
          </div>

          <Timkiem
            opVa={this.state.valueOp}
            value={this.state.value}
            Tvien={this.state.lisT.filter(
              (vien) => vien.name.toLowerCase().indexOf(this.state.value) !== -1
            )}
          />
        </div>
      );
    };
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
            <Route path="/timkiem" component={Fim}></Route>
            <Redirect to="/home" />
          </Switch>
        </HashRouter>

        <Footer />
      </div>
    );
  }
}

export default Main;
