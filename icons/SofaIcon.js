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
    <path d="M7,6H9C10.1,6 11,6.9 11,8V12H5V8C5,6.9 5.9,6 7,6M15,6H17C18.1,6 19,6.9 19,8V12H13V8C13,6.9 13.9,6 15,6M1,9H2C2.55,9 3,9.45 3,10V12C3,13.1 3.9,14 5,14H19C20.1,14 21,13.1 21,12V11L21,10C21,9.45 21.45,9 22,9H23C23.55,9 24,9.45 24,10V19H21V17H3V19H0V10C0,9.45 0.45,9 1,9Z" />
  </svg>
)
