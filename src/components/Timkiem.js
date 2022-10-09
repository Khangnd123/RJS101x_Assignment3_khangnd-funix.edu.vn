import React from "react";
import dateFormat from "dateformat";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderNv({ Tvien }) {
  const mm = Tvien.map((Tvien) => {
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
const Timkiem = (props) => {
  var ab;

  if (props.opVa === "id") {
    ab = props.Tvien.sort((a, b) => b.id - a.id);
    console.log(ab);
  } else if (props.opVa === "annualLeave") {
    ab = props.Tvien.sort((a, b) => b.annualLeave - a.annualLeave);
  } else if (props.opVa === "overTime") {
    ab = props.Tvien.sort((a, b) => b.overTime - a.overTime);
  } else if (props.opVa === "") {
    ab = props.Tvien;
  }

  if (ab.length === 0 && props.value !== "111111111111") {
    return <div>Hãy nhập lại</div>;
  } else if (ab != null && props.value !== "") {
    return <RenderNv Tvien={ab} />;
  }
};

export default Timkiem;
