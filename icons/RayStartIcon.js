import React from 'react'

const DEFAULT_SIZE = 24

export const RayStartIcon = ({
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
    <path d="M4,9C5.31,9 6.42,9.83 6.83,11H22V13H6.83C6.42,14.17 5.31,15 4,15C2.34,15 1,13.66 1,12C1,10.34 2.34,9 4,9Z" />
  </svg>
)
