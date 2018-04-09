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
    <path d="M10,17.25V14H3V10H10V6.75L15.25,12L10,17.25M8,2H17C18.1,2 19,2.9 19,4V20C19,21.1 18.1,22 17,22H8C6.9,22 6,21.1 6,20V16H8V20H17V4H8V8H6V4C6,2.9 6.9,2 8,2Z" />
  </svg>
)
