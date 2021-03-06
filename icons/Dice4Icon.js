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
    <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5M17,15C15.9,15 15,15.9 15,17C15,18.1 15.9,19 17,19C18.1,19 19,18.1 19,17C19,15.9 18.1,15 17,15M17,5C15.9,5 15,5.9 15,7C15,8.1 15.9,9 17,9C18.1,9 19,8.1 19,7C19,5.9 18.1,5 17,5M7,15C5.9,15 5,15.9 5,17C5,18.1 5.9,19 7,19C8.1,19 9,18.1 9,17C9,15.9 8.1,15 7,15Z" />
  </svg>
)
