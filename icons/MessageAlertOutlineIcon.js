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
    <path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16C22,17.1 21.1,18 20,18H6L2,22V4C2,2.9 2.9,2 4,2H20C21.1,2 22,2.9 22,4M20,4H4V17.2L5.2,16H20V4Z" />
  </svg>
)
