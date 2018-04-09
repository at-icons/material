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
    <path d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18C3,19.1 3.9,20 5,20H11C12.1,20 13,19.1 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z" />
  </svg>
)
