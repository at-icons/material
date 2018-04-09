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
    <path d="M22,15C22,18.87 18.87,22 15,22H9C5.13,22 2,18.87 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z" />
  </svg>
)
