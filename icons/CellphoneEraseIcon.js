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
    <path d="M11,8.2L10,7.2L6,11.2L2,7.2L1,8.2L5,12.2L1,16.2L2,17.2L6,13.2L10,17.2L11,16.2L7,12.2L11,8.2M17,1H7C5.9,1 5,1.9 5,3V6H7V4H17V20H7V18H5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1Z" />
  </svg>
)
