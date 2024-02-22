import React, { useRef } from 'react'
import { Form } from 'react-bootstrap'

export default function CheckboxInput() {
  return (
    // <>
    //   <div className="">
    //     <div className="round d-flex">
    //       <input type="checkbox" id="checkbox" />
    //       <label htmlFor="checkbox"></label>
    //     </div>
    //   </div>
    //   <style global jsx>
    //     {`
    //       .round {
    //         position: relative;
    //       }

    //       .round label {
    //         background-color: #fff;
    //         border: 1px solid #ccc;
    //         border-radius: 50%;
    //         cursor: pointer;
    //         height: 24px;
    //         left: 0;
    //         position: absolute;
    //         top: 0;
    //         width: 24px;
    //       }

    //       .round label:after {
    //         border: 2px solid #fff;
    //         border-top: none;
    //         border-right: none;
    //         content: '';
    //         height: 4px;
    //         left: 5.5px;
    //         opacity: 0;
    //         position: absolute;
    //         top: 8px;
    //         transform: rotate(-45deg);
    //         width: 12px;
    //       }

    //       .round input[type='checkbox'] {
    //         visibility: hidden;
    //       }

    //       .round input[type='checkbox']:checked + label {
    //         background-color: #f16e0f;
    //         border-color: #f16e0f;
    //       }

    //       .round input[type='checkbox']:checked + label:after {
    //         opacity: 1;
    //       }

    //       /* general styling */
    //       html,
    //       body {
    //         height: 100%;
    //         margin: 0;
    //       }

    //       body {
    //         -webkit-box-align: center;
    //         -ms-flex-align: center;
    //         align-items: center;
    //         background-color: #f1f2f3;
    //         display: -webkit-box;
    //         display: -ms-flexbox;
    //         display: flex;
    //       }
    //     `}
    //   </style>
    // </>
    <>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="與會員註冊資料相同" />
      </Form.Group>
    </>
  )
}
