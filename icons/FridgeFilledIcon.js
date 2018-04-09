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
    <path d="M7,2H17C18.1,2 19,2.9 19,4V9H5V4C5,2.9 5.9,2 7,2M19,19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z" />
  </svg>
)
