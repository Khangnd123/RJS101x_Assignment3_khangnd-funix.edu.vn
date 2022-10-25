import React, { Component } from "react";

import { DEPARTMENTS } from "../shared/staffs";
import ChucVuLoc from "./renCv";
import { STAFFS } from "../shared/staffs";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Row, Label, Col } from "reactstrap";

const newStaff = {
  name: "",
  doB: "",
  salaryScale: "",
  startDate: "",
  department: "",
  annualLeave: "",
  overTime: "",
  salary: "",
  image: "/assets/images/alberto.png",
};

class ThemNhanvien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Chucvu: DEPARTMENTS,
      LisTNV: STAFFS,
      id: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {}
  handleSubmit(values) {
    //alert("Current State is: " + JSON.stringify(values));

    newStaff.id = this.state.LisTNV.length;
    newStaff.name = values.name;
    newStaff.doB = values.doB;
    newStaff.salaryScale = parseFloat(values.salaryScale);
    newStaff.startDate = values.startDate;
    newStaff.annualLeave = values.annualLeave;
    let index = this.state.Chucvu.findIndex(
      (a) => a.name === values.department
    );
    console.log(index);
    newStaff.department = DEPARTMENTS[index];
    newStaff.overTime = values.overTime;
    //newStaff.salary = 100;
    newStaff.image = this.state.image;
    this.state.LisTNV.push(newStaff);
    alert("Đã thêm vào danh sách nhân viên");

    // event.preventDefault();
  }

  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const isNumber = (val) => !isNaN(Number(val));
    return (
      <div className="row row-content">
        <div className="col-12">
          <LocalForm
            onChange={(values) => this.handleChange(values)}
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <Row className="form-group">
              <Label htmlFor="name" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="name Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="doB" md={2}>
                doB
              </Label>
              <Col md={10}>
                <Control.input
                  type="date"
                  model=".doB"
                  id="doB"
                  name="doB"
                  placeholder="doB "
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".doB"
                  show="touched"
                  messages={{
                    required: "yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="salaryScale" md={2}>
                salaryScale
              </Label>
              <Col md={10}>
                <Control.select
                  model=".salaryScale"
                  id="salaryScale"
                  name="salaryScale"
                  placeholder="salaryScale "
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option value="">Chọn salaryScale</option>
                  <option value="1">1</option>
                  <option value="1.1">1.1</option>
                  <option value="1.2">1.2</option>
                  <option value="1.3">1.3</option>
                  <option value="1.4">1.4</option>
                  <option value="1.5">1.5</option>
                  <option value="1.6">1.6</option>
                  <option value="1.7">1.7</option>
                  <option value="1.8">1.8</option>
                  <option value="1.9">1.9</option>
                  <option value="2">2</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    required: "yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="startDate" md={2}>
                startDate
              </Label>
              <Col md={10}>
                <Control.text
                  type="number"
                  min="1"
                  max="31"
                  model=".startDate"
                  id="startDate"
                  name="startDate"
                  placeholder="startDate "
                  className="form-control"
                  validators={{ required, isNumber }}
                />
                <Errors
                  className="text-danger"
                  model=".startDate"
                  show="touched"
                  messages={{
                    required: "Required",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="department" md={2}>
                department
              </Label>
              <Col md={10}>
                <Control.select
                  model=".department"
                  id="department"
                  name="department"
                  placeholder="department "
                  className="form-control"
                  validators={{ required }}
                >
                  {" "}
                  <option value="">Chọn department</option>
                  <ChucVuLoc Chucvu={this.state.Chucvu} />
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".department"
                  show="touched"
                  messages={{
                    required: "yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="annualLeave" md={2}>
                annualLeave
              </Label>
              <Col md={10}>
                <Control.text
                  type="number"
                  min="1"
                  max="10"
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder="annualLeave "
                  className="form-control"
                  validators={{
                    isNumber,
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Required",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="overTime" md={2}>
                overTime
              </Label>
              <Col md={10}>
                <Control.text
                  min="1"
                  max="31"
                  type="number"
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  placeholder="overTime "
                  className="form-control"
                  validators={{
                    isNumber,
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Required",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="image" md={2}>
                image
              </Label>
              <Col md={10}>
                <Control.text
                  model=".image"
                  id="image"
                  name="image"
                  placeholder="image "
                  value="/assets/images/alberto.png"
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="Submit" md={2}></Label>
              <Col md={10}>
                <Control.input
                  type="Submit"
                  model=".Submit"
                  id="Submit"
                  name="Submit"
                  value="Submit"
                  className="form-control"
                />
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    );
  }
}
export default ThemNhanvien;
