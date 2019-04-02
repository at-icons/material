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
    <path d="M14,4H4V14H2V4C2,2.9 2.9,2 4,2H14V4M18,6H8C6.9,6 6,6.9 6,8V18H8V8H18V6M22,12V20C22,21.1 21.1,22 20,22H12C10.9,22 10,21.1 10,20V12C10,10.9 10.9,10 12,10H20C21.1,10 22,10.9 22,12M20,15H12V17H20V15Z" />
  </svg>
)
