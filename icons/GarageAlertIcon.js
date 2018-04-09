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
    <path d="M17,20H15V11H5V20H3V9L10,5L17,9V20M6,12H14V14H6V12M6,15H14V17H6V15M19,15V10H21V15H19M19,19V17H21V19H19Z" />
  </svg>
)
