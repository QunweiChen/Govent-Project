import React from 'react'

export default function CheckboxInput() {
  return (
    <>
      <div className="">
        <div className="round">
          <input type="checkbox"  id="checkbox" />
          <label for="checkbox"></label>
        </div>
      </div>
      <style global jsx>
        {`
          .round {
            position: relative;
          }

          .round label {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            cursor: pointer;
            height: 28px;
            left: 0;
            position: absolute;
            top: 0;
            width: 28px;
          }

          .round label:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: '';
            height: 6px;
            left: 7px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }

          .round input[type='checkbox'] {
            visibility: hidden;
          }

          .round input[type='checkbox']:checked + label {
            background-color: #66bb6a;
            border-color: #66bb6a;
          }

          .round input[type='checkbox']:checked + label:after {
            opacity: 1;
          }

          /* general styling */
          html,
          body {
            height: 100%;
            margin: 0;
          }

          body {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: #f1f2f3;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
        `}
      </style>
    </>
  )
}
