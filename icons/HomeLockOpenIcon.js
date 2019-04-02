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
    <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8C13.66,8 15,9.34 15,11H13C13,10.45 12.55,10 12,10C11.45,10 11,10.45 11,11V13H16V17H8V13H9V11C9,9.34 10.34,8 12,8Z" />
  </svg>
)
