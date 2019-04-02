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
    <path d="M4,4C3.45,4 3,4.45 3,5V10C2.54,10 2.14,10.31 2.03,10.76V13.97H2.29C2.65,13.37 3.3,13 4,13H13C13.7,13 14.35,13.37 14.71,13.97H16.03L16,11V11C16,10.45 15.55,10 15,10H13V8C13,7.45 12.55,7 12,7C11.45,7 11,7.45 11,8V10H9V5C9,4.45 8.55,4 8,4H4M5,6H7V10L7,11H5V6M17,11V19H22V18L19,17L18,11H17M4,15C2.9,15 2,15.9 2,17C2,18.1 2.9,19 4,19H13C14.1,19 15,18.1 15,17C15,15.9 14.1,15 13,15H4Z" />
  </svg>
)
