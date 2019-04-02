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
    <path d="M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M20,16H8V4H20V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16M18.53,8.06L17.47,7L12.59,11.88L10.47,9.76L9.41,10.82L12.59,14L18.53,8.06Z" />
  </svg>
)
