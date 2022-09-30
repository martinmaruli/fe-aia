import './notfound.css';
;
const NotFound = () => {
  return (
    <>
      <div className="tipsiz">
        <div className="tipsiz-body">
          <div className="left-arm arm"></div>
          <div className="face">
            <div className="upper-face">
              <div className="element">4</div>
              <div className="element">0</div>
              <div className="element">4</div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="right-arm arm"></div>
        </div>
      </div>

      <p className='text-notfound'> 
        Keyword not found.
      </p>
    </>
  );
};

export default NotFound;
