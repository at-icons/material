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
    <path d="M18,8H8V18H6V8C6,6.9 6.9,6 8,6H18V8M14,2H4C2.9,2 2,2.9 2,4V14H4V4H14V2M22,12V20C22,21.1 21.1,22 20,22H12C10.9,22 10,21.1 10,20V12C10,10.9 10.9,10 12,10H20C21.1,10 22,10.9 22,12M20,15H17V12H15V15H12V17H15V20H17V17H20V15Z" />
  </svg>
)
