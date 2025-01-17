import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={`${process.env.REACT_APP_API_URL}/${device.img}`}
          />
        </Col>

        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="w-auto">{device.name}</h2>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>

            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>

      <Row className="mx-0 my-3">
        <h1>Характеристики</h1>

        {device.info.map((info, index) => {
          return (
            <div
              key={info.id}
              style={{
                background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              {info.title}: {info.description}
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
