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
    <path d="M17,2C18.1,2 19,2.9 19,4V14C19,15.1 18.1,16 17,16H13V18H14C14.55,18 15,18.45 15,19H22V21H15C15,21.55 14.55,22 14,22H10C9.45,22 9,21.55 9,21H2V19H9C9,18.45 9.45,18 10,18H11V16H7C5.9,16 5,15.1 5,14V4C5,2.9 5.9,2 7,2H17M7,6L11,10L7,14H9.85L13.13,10.72C13.5,10.33 13.5,9.7 13.13,9.3L9.83,6H7M17,12H14V14H17V12Z" />
  </svg>
)