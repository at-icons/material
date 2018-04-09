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
    <path d="M15,14V8H17.17L12,2.83L6.83,8H9V14H15M12,0L22,10H17V16H7V10H2L12,0M7,18H17V24H7V18M15,20H9V22H15V20Z" />
  </svg>
)
