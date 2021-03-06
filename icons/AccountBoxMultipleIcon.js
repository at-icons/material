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
    <path d="M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4V6M20,2C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H8C6.9,18 6,17.1 6,16V4C6,2.9 6.9,2 8,2H20M17,7C17,5.34 15.66,4 14,4C12.34,4 11,5.34 11,7C11,8.66 12.34,10 14,10C15.66,10 17,8.66 17,7M8,15V16H20V15C20,13 16,11.9 14,11.9C12,11.9 8,13 8,15Z" />
  </svg>
)
