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
    <path d="M22,2V12H20V5.41L10.41,15L12.71,17.29L11.29,18.71L9,16.41L3.71,21.71L2.29,20.29L7.59,15L5.29,12.71L6.71,11.29L9,13.59L18.59,4H12V2H22Z" />
  </svg>
)
