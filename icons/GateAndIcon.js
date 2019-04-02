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
    <path d="M2,4V20H14C18.42,20 22,16.42 22,12C22,7.58 18.42,4 14,4H2M4,6H14C17.31,6 20,8.69 20,12C20,15.31 17.31,18 14,18H4V6Z" />
  </svg>
)
