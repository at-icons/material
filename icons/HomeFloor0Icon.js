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
    <path d="M11,10H13V16H11V10M22,12H19V20H5V12H2L12,3L22,12M15,10C15,8.9 14.1,8 13,8H11C9.9,8 9,8.9 9,10V16C9,17.1 9.9,18 11,18H13C14.1,18 15,17.1 15,16V10Z" />
  </svg>
)
