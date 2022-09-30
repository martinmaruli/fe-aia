import { Row, Col } from 'react-bootstrap';

const Sugest = (props) => {
  return (
    <div className="sugestBox d-flex align-items-center text-center bg-secondary w-100">
      <Row className="col-12 align-items-center m-0">
        <Col className="col-4 d-flex justify-content-end">
          <div className="icon d-flex align-items-center border rounded-circle">
            <span className="material-icons mx-auto">{props.icon}</span>
          </div>
        </Col>
        <Col className="col-8 text-start">
          <p className="mb-0">{props.type}</p>
          <p className="mb-0">{props.object}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Sugest;