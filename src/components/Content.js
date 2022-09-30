import { Col } from 'react-bootstrap';

const Content = (props) => {
  return (
    <>
      {props.data && props.data.map((data, index) => {
        return (
          <Col key={index} sm="6">
            <div className="contentBox w-100">
              <img className="p-0" src={data.link} alt="" />
              <div className="overlay">
                <div className="description d-flex flex-column mx-2 text-white w-100">
                  <h5 className="text-truncate">{data.title}</h5>
                  {}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Content;
