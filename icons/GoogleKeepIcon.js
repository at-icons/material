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
    <path d="M4,2H20C21.1,2 22,2.9 22,4V17.33L17.33,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M17,17V20.25L20.25,17H17M10,19H14V18H15V13C16.21,12.09 17,10.64 17,9C17,6.24 14.76,4 12,4C9.24,4 7,6.24 7,9C7,10.64 7.79,12.09 9,13V18H10V19M14,17H10V16H14V17M14,15H10V14H14V15M12,5C14.21,5 16,6.79 16,9C16,10.5 15.2,11.77 14,12.46V13H10V12.46C8.8,11.77 8,10.5 8,9C8,6.79 9.79,5 12,5Z" />
  </svg>
)
