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
    <path d="M12,12L8,16H11V22H13V16H16M19,4H18V2H16V4H8V2H6V4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H9V20H5V9H19V20H15V22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4Z" />
  </svg>
)
