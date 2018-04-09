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
    <path d="M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4M18,7H15V12.5C15,13.88 13.88,15 12.5,15C11.12,15 10,13.88 10,12.5C10,11.12 11.12,10 12.5,10C13.07,10 13.58,10.19 14,10.5V5H18M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2Z" />
  </svg>
)
