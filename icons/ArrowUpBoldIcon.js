import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowUpBoldIcon = ({
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
    <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
  </svg>
)
