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
    <path d="M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z" />
  </svg>
)
