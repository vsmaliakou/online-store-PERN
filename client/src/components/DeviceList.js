import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row>
      {device.devices.map((item) => {
        return <DeviceItem key={item.id} device={item} />;
      })}
    </Row>
  );
});

export default DeviceList;
