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
    <path d="M3,21V17.29L10.78,12.8L14.55,15L21,11.25V21H3M21,8.94L14.55,12.67L10.78,10.5L3,15V12.79L10.78,8.3L14.55,10.5L21,6.75V8.94Z" />
  </svg>
)
