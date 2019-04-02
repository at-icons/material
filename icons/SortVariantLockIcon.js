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
    <path d="M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V17C15,15.34 16.34,14 18,14C19.66,14 21,15.34 21,17V18H22V22M18,16C17.45,16 17,16.45 17,17V18H19V17C19,16.45 18.55,16 18,16Z" />
  </svg>
)
