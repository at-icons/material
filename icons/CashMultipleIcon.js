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
    <path d="M5,6H23V18H5V6M14,9C15.66,9 17,10.34 17,12C17,13.66 15.66,15 14,15C12.34,15 11,13.66 11,12C11,10.34 12.34,9 14,9M9,8C9,9.1 8.1,10 7,10V14C8.1,14 9,14.9 9,16H19C19,14.9 19.9,14 21,14V10C19.9,10 19,9.1 19,8H9M1,10H3V20H19V22H1V10Z" />
  </svg>
)
