import React, { Component } from "react";
import dateFormat from "dateformat";
import { DEPARTMENTS } from "../shared/staffs";
import ChucVuLoc from "./renCv";
import { STAFFS } from "../shared/staffs";
//import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
let luong = 0;
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
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false,
        salary: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hanledBlur = this.hanledBlur.bind(this);

    // this.FindNhanvien = this.FindNhanvien.bind(this);
  }
  hanledBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state, [field]: true },
    });
  };
  validate(
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime,
    salary
  ) {
    const errors = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
    };

    if (this.state.touched.name && name.length < 3)
      errors.name = " Name should be < 3 characters";
    else if (this.state.touched.name && name.length > 20)
      errors.name = " Name should be >20 characters";

    return errors;
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    if (
      this.state.name === "" ||
      this.state.doB === "" ||
      this.state.salaryScale === "" ||
      this.state.startDate === "" ||
      this.state.annualLeave === "" ||
      this.state.overTime === "" ||
      this.state.department === ""
    ) {
      alert(" các trường thông tin bị trống hoạc chưa chọn option");
    } else {
      newStaff.id = this.state.LisTNV.length;
      newStaff.name = this.state.name;
      newStaff.doB = this.state.doB;
      newStaff.salaryScale = parseFloat(this.state.salaryScale);
      newStaff.startDate = this.state.startDate;
      newStaff.annualLeave = this.state.annualLeave;
      let index = this.state.Chucvu.findIndex(
        (a) => a.name === this.state.department
      );
      console.log(index);
      newStaff.department = DEPARTMENTS[index];
      newStaff.overTime = this.state.overTime;
      //newStaff.salary = 100;
      newStaff.image = this.state.image;
      this.state.LisTNV.push(newStaff);
      alert("Đã thêm vào danh sách nhân viên");
    }
    event.preventDefault();
  }

  FindNhanvien() {
    if (this.state.fname !== "") {
      let a = this.state.lisT.filter(
        (nvien) =>
          nvien.name.toLowerCase().indexOf(this.state.fname.toLowerCase()) !==
          -1
      );
      const mm = a.map((Tvien) => {
        return (
          <div className="col-md-4 col-sm-6 col-12 " key={Tvien.id}>
            <Card>
              <CardImg top src={Tvien.image} />
              <CardBody>
                <CardText id="tenho1"> Họ và tên : {Tvien.name}</CardText>
                <CardText>
                  Ngày vào công ty : {dateFormat(Tvien.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban : {Tvien.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại : {Tvien.annualLeave}</CardText>
                <CardText> Số ngày đã làm thêm : {Tvien.overTime}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      });
      return <div className="row">{mm}</div>;
    }
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.salaryScale,
      this.state.startDate,
      this.state.department,
      this.state.annualLeave,
      this.state.overTime,
      this.state.salary
    );
    if (this.state.salaryScale !== "" && this.state.overTime !== "") {
      luong =
        parseFloat(this.state.salaryScale) * 3000000 +
        parseFloat(this.state.overTime) * 200000;
    } else {
      luong = 0;
    }

    return (
      <div className="row row-content">
        <div className="col-12">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" Name"
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.hanledBlur("name")}
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.name}</FormFeedback>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="doB" md={2}>
                doB
              </Label>
              <Col md={10}>
                <Input
                  type="date"
                  id="doB"
                  name="doB"
                  placeholder=" doB"
                  value={this.state.doB}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="salaryScale" md={2}>
                salaryScale
              </Label>
              <Col md={10}>
                <select
                  id="salaryScale"
                  name="salaryScale"
                  placeholder=" salaryScale"
                  value={this.state.salaryScale}
                  onChange={this.handleChange}
                >
                  {" "}
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
                </select>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="startDate" md={2}>
                startDate
              </Label>
              <Col md={10}>
                <Input
                  type="number"
                  min="1"
                  max="31"
                  id="startDate"
                  name="startDate"
                  placeholder=" startDate"
                  value={this.state.startDate}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="department" md={2}>
                department
              </Label>
              <Col md={10}>
                <select
                  name="department"
                  id="department"
                  value={this.state.department}
                  onChange={this.handleChange}
                >
                  <option value="">Chọn department</option>
                  <ChucVuLoc Chucvu={this.state.Chucvu} />
                </select>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="annualLeave" md={2}>
                annualLeave
              </Label>
              <Col md={10}>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder=" annualLeave"
                  value={this.state.annualLeave}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="overTime" md={2}>
                overTime
              </Label>
              <Col md={10}>
                <Input
                  min="1"
                  max="31"
                  type="number"
                  id="overTime"
                  name="overTime"
                  placeholder=" overTime"
                  value={this.state.overTime}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="salary" md={2}>
                salary
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="salary"
                  name="salary"
                  value={parseInt(luong)}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="image" md={2}>
                image
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="/assets/images/alberto.png"
                  value="/assets/images/alberto.png"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="Submit" md={2}></Label>
              <Col md={10}>
                <Input className="Submit" type="submit" value="Submit" />
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default ThemNhanvien;
