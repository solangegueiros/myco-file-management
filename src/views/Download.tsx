import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DownloadFile from "components/DownloadFile";

export default () => (
  <Container className="py-5">
    <h1 className="text-center mb-5">Retrieve file</h1>
    <Row className="justify-content-md-center">
      <Col lg="6">
        <DownloadFile />
      </Col>
    </Row>
  </Container>
);
