import React from 'react'

const DEFAULT_SIZE = 24

export const StairsIcon = ({
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
    <path d="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z" />
  </svg>
)
