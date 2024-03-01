import React, { useState } from 'react'
import Link from 'next/link'

const CustomEventCard = ({ backgroundImage, title, secondTitle }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`custom-events-type d-flex flex-column justify-content-end p-3 ${isHovered ? 'flex-2' : ''
                }`}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href="/" className='text-white'>
            <h5 className="mb-0">{title}</h5>
            <p className={`second-title ${isHovered ? '' : 'hide'}`}>{secondTitle}</p>
            </Link>
            <style global jsx>
                {`
          .custom-events-type {
            transition: 300ms;
            flex: 1;
            margin-inline: 5px;
            height: 250px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            border-radius: 5px;
            h5 {
              transition: 300ms;
              transform: translateY(20px);
              text-shadow: 2px 2px 4px #333;
            }
          }
          .custom-events-type.flex-2 {
            transform: translateY(-10px);
            flex: 2;
            h5 {
              transform: translateY(0px);
            }
          }
          .second-title {
            transition: 300ms;
            opacity: 1;
          }
          .second-title.hide{
            opacity: 0;
          }
        `}
            </style>
        </div>
    )
}

export default CustomEventCard;
