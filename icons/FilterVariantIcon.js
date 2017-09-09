import React from 'react'

const DEFAULT_SIZE = 24

export const FilterVariantIcon = ({
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
    <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" />
  </svg>
)
