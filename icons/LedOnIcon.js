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
    <path d="M11,0V4H13V0H11M18.3,2.29L15.24,5.29L16.64,6.71L19.7,3.71L18.3,2.29M5.71,2.29L4.29,3.71L7.29,6.71L8.71,5.29L5.71,2.29M12,6C9.79,6 8,7.79 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10C16,7.79 14.21,6 12,6M2,9V11H6V9H2M18,9V11H22V9H18Z" />
  </svg>
)
