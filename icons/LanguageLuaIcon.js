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
    <path d="M10.5,5C5.81,5 2,8.81 2,13.5C2,18.19 5.81,22 10.5,22C15.19,22 19,18.19 19,13.5C19,8.81 15.19,5 10.5,5M13.5,13C12.12,13 11,11.88 11,10.5C11,9.12 12.12,8 13.5,8C14.88,8 16,9.12 16,10.5C16,11.88 14.88,13 13.5,13M19.5,2C18.12,2 17,3.12 17,4.5C17,5.88 18.12,7 19.5,7C20.88,7 22,5.88 22,4.5C22,3.12 20.88,2 19.5,2" />
  </svg>
)
