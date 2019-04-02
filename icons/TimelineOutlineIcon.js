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
    <path d="M6,12C6,13.1 5.1,14 4,14C2.9,14 2,13.1 2,12C2,10.9 2.9,10 4,10C5.1,10 6,10.9 6,12M5,2V8H3V2H5M3,22V16H5V22H3M22,7V17C22,18.1 21.1,19 20,19H11C9.9,19 9,18.1 9,17V14L7,12L9,10V7C9,5.9 9.9,5 11,5H20C21.1,5 22,5.9 22,7M20,7H11V10.83L9.83,12L11,13.17V17H20V7Z" />
  </svg>
)
