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
    <path d="M19,4H15L7.1,16.63L4.5,12L9,4H5L0.5,12L5,20H9L16.89,7.37L19.5,12L15,20H19L23.5,12L19,4Z" />
  </svg>
)
