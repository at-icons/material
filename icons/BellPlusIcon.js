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
    <path d="M10,21C10,22.11 10.9,23 12,23C13.1,23 14,22.1 14,21M18.88,16.82V11C18.88,7.75 16.63,5.03 13.59,4.31V3.59C13.59,2.71 12.88,2 12,2C11.12,2 10.41,2.71 10.41,3.59V4.31C7.37,5.03 5.12,7.75 5.12,11V16.82L3,18.94V20H21V18.94M16,13H13V16H11V13H8V11H11V8H13V11H16" />
  </svg>
)
