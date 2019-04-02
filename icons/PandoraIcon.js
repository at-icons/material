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
    <path d="M10,20C10,20.55 9.55,21 9,21H4V3H13.71C17.44,3 20.46,6.02 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z" />
  </svg>
)
