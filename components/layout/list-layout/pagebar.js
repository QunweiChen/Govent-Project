import { useEffect } from 'react'
import React, { useState } from 'react'


export default function PageBar() {
return(
<div className="btn-group " role="group" aria-label="group">
<button
  type="button"
  className="btn btn-normal-gray"
  aria-label="previous"
>
  &laquo;
</button>
<button type="button" className="btn btn-primary">
  1
</button>
<button
  type="button"
  className="btn btn-secondary text-white"
>
  2
</button>
<button type="button" className="btn btn-secondary">
  3
</button>
<button type="button" className="btn btn-secondary">
  4
</button>
<button type="button" className="btn btn-secondary">
  5
</button>
<button type="button" className="btn btn-secondary">
  6
</button>
<button
  type="button"
  className="btn btn-normal-gray"
  aria-label="next"
>
  &raquo;
</button>
</div>
)
}