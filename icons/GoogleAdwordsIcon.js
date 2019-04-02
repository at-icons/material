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
    <path d="M2,22L8.5,2H15.4L9.2,20C9.2,20 8.6,22 7,22C5.9,22 2,22 2,22M16.4,5L13,15L15,20.7C15,20.7 15.4,22 17,22C18.3,22 22,22 22,22L16.4,5Z" />
  </svg>
)
