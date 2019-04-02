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
    <path d="M1.5,20.5L3,15.03L4.46,17.6L11,13.82V3H13V13.82L22.39,19.25L21.39,21L12,15.56L5.46,19.33L7,21.96L1.5,20.5Z" />
  </svg>
)
