import React from 'react'

const DEFAULT_SIZE = 24

export const BowTieIcon = ({
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
    <path d="M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z" />
  </svg>
)
