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
    <path d="M9,21V22H7V21C5.9,21 5,20.1 5,19V4C5,2.9 5.9,2 7,2H17C18.1,2 19,2.9 19,4V19C19,20.1 18.1,21 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z" />
  </svg>
)
