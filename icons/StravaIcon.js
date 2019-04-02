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
    <path d="M14.92,17.16L16.75,13.53H19.45L14.94,22.5L10.37,13.53H13.07L14.92,17.16M10.63,8.66L8.18,13.55H4.55L10.61,1.5L16.74,13.55H13.11L10.63,8.66Z" />
  </svg>
)
