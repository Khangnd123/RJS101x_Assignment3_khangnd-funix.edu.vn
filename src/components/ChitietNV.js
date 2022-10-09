import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardText,
} from "reactstrap";
function RenderNv({ Mvien }) {
  return (
    <div className="row">
      <div className="col-md-3  col-sm-4  col-12 ">
        <Card>
          <CardImg id="imgpk" top src={Mvien.image} />
        </Card>
      </div>

      <div className="col-md-9  col-sm-8 col-12 ">
        <Card>
          <CardBody>
            <CardText id="tenho"> Họ và tên : {Mvien.name}</CardText>
            <CardText>
              Ngày vào công ty : {dateFormat(Mvien.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban : {Mvien.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại : {Mvien.annualLeave}</CardText>
            <CardText> Số ngày đã làm thêm : {Mvien.overTime}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
const Ndetail = (props) => {
  if (props.Mvien != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.Mvien.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.Mvien.name} </h3>
            <hr />
          </div>
        </div>

        <RenderNv Mvien={props.Mvien} />
        <br />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Ndetail;
