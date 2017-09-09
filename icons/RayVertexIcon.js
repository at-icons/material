import React from 'react'

const DEFAULT_SIZE = 24

export const RayVertexIcon = ({
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
    <path d="M2,11H9.17C9.58,9.83 10.69,9 12,9C13.31,9 14.42,9.83 14.83,11H22V13H14.83C14.42,14.17 13.31,15 12,15C10.69,15 9.58,14.17 9.17,13H2V11Z" />
  </svg>
)
