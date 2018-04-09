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
    <path d="M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16M7,7H11V9H7V11H9C10.1,11 11,11.9 11,13V15C11,16.1 10.1,17 9,17H5V15H9V13H7C5.9,13 5,12.1 5,11V9C5,7.9 5.9,7 7,7Z" />
  </svg>
)
