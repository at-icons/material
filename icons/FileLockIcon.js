import React from 'react'

const DEFAULT_SIZE = 24

export default ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M6,2C4.89,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11C13.66,11 15,12.34 15,14V15H16V19H8V15H9V14C9,12.36 10.34,11 12,11M12,13C11.45,13 11,13.45 11,14V15H13V14C13,13.47 12.55,13 12,13Z" />
  </svg>
)
