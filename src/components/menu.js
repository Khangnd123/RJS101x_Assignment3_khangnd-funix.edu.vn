import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
function RenderMenuItem({ nvien }) {
  return (
    <Card>
      <Link to={`/menu/${nvien.id}`}>
        <CardImg src={nvien.image} alt={nvien.name} />
        <p>{nvien.name}</p>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.lisT.map((nvien) => {
    return (
      <div className="col-md-2 col-sm-4 col-6 " key={nvien.id}>
        <RenderMenuItem nvien={nvien} />
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

          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu </h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
