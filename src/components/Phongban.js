import React from "react";
import {
  Card,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderPhongbanItem({ pb }) {
  return (
    <Card>
      <CardBody>
        <CardTitle id="tenho">{pb.name}</CardTitle>
        <CardText>{pb.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

const Pban = (props) => {
  const phongban = props.Mem.map((pb) => {
    return (
      <div className="col-md-4 col-sm-6 col-12" key={pb.id}>
        <RenderPhongbanItem pb={pb} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Phòng ban </h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">{phongban}</div>
    </div>
  );
};

export default Pban;
