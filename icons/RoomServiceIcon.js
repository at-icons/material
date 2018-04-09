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
    <path d="M2,17H22V19H2V17M13.84,7.79C13.94,7.54 14,7.27 14,7C14,5.9 13.1,5 12,5C10.9,5 10,5.9 10,7C10,7.27 10.06,7.54 10.16,7.79C6.2,8.61 3.27,11.97 3,16H21C20.73,11.97 17.8,8.61 13.84,7.79Z" />
  </svg>
)
