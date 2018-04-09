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
    <path d="M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z" />
  </svg>
)
