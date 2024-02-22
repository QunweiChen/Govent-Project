/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CheckboxInput({ Content = '' }) {
  const inputRef = useRef(null)

  return (
    <>
      <div className="">
        <div className="round d-flex">
          <label htmlFor="checkbox" className="checkbox-container p">
            {Content}
            <input
              type="checkbox"
              id="checkbox"
              ref={inputRef}
              className="input-ref"
              onChange={() => {
                const value = inputRef.current.checked
                console.log(value)
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <style jsx>
        {`
          .checkbox-container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Hide the browser's default checkbox */
          .checkbox-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          /* Create a custom checkbox */
          .checkmark {
            position: absolute;
            border-radius: 30px;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
          }

          /* On mouse-over, add a grey background color */
          .checkbox-container:hover input ~ .checkmark {
            background-color: #ccc;
          }

          /* When the checkbox is checked, add a blue background */
          .checkbox-container input:checked ~ .checkmark {
            background-color: #f16e0f;
          }

          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
            content: '';
            position: absolute;
            display: none;
          }

          /* Show the checkmark when checked */
          .checkbox-container input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the checkmark/indicator */
          .checkbox-container .checkmark:after {
            left: 8px;
            top: 3.5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        `}
      </style>
    </>
  )
}
