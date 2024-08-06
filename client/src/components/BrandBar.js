import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => {
        return (
          <Card
            style={{ cursor: "pointer" }}
            key={brand.id}
            className="w-auto p-3"
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </Card>
        );
      })}
    </Row>
  );
});

export default BrandBar;
