import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavbarTopRwd() {
  const [activeButton, setActiveButton] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const handleClick2 = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <section className="d-sm-none d-block">
        <button
          className={`col-3 btn  ${
            activeButton === 0 ? 'text-primary-deep ' : 'text-white'
          }`}
          onClick={() => handleClick(0)}
        >
          <i className="bi bi-map fs-5"></i>
          <div className="sm-p">地圖</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 1 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(1)}
        >
          <i className="bi bi-sliders fs-4"></i>
          <div className="sm-p">類別</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 2 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(2)}
        >
          <i className="bi bi-funnel fs-5"></i>
          <div className="sm-p">篩選</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 3 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(3)}
        >
          <i className="bi bi-sort-down fs-5"></i>
          <div className="sm-p">排序</div>
        </button>
        <Dropdown
          variant=""
          id="dropdown-basic"
          className={`col-3  ${
            activeButton === 4 ? 'text-primary-deep ' : 'text-white'
          }`}
        >
          <Dropdown.Toggle variant="" id="dropdown-basic" onClick={() => handleClick(4)}>
            <i className="bi bi-sort-down fs-5"></i>
            <div className="sm-p">排序</div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          variant=""
          id="dropdown-basic"
          className={`col-3  ${
            selectedOption === 5 ? 'text-primary-deep ' : 'text-white'
          }`}
        >
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <i className="bi bi-sort-down fs-5"></i>
            <div className="sm-p">排序</div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleClick2(1)}>Action</Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick2(2)}>Another action</Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick2(3)}>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </>
  );
}
