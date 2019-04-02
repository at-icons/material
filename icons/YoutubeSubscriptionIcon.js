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
    <path d="M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V12C2,10.9 2.9,10 4,10H20C21.1,10 22,10.9 22,12M16,16L10,12.73V19.26L16,16Z" />
  </svg>
)
