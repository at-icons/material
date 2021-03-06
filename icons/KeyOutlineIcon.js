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
    <path d="M22,19H16V15H13.32C12.18,17.42 9.72,19 7,19C3.14,19 0,15.86 0,12C0,8.14 3.14,5 7,5C9.72,5 12.17,6.58 13.32,9H24V15H22V19M18,17H20V13H22V11H11.94L11.71,10.33C11,8.34 9.11,7 7,7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17C9.11,17 11,15.66 11.71,13.67L11.94,13H18V17M7,15C5.34,15 4,13.66 4,12C4,10.34 5.34,9 7,9C8.66,9 10,10.34 10,12C10,13.66 8.66,15 7,15M7,11C6.45,11 6,11.45 6,12C6,12.55 6.45,13 7,13C7.55,13 8,12.55 8,12C8,11.45 7.55,11 7,11Z" />
  </svg>
)
