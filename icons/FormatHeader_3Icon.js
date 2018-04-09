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
    <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19C20.1,4 21,4.9 21,6V16C21,17.1 20.1,18 19,18H15C13.9,18 13,17.1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6C13,4.9 13.9,4 15,4Z" />
  </svg>
)
