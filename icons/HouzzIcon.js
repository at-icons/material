import React from 'react'

const DEFAULT_SIZE = 24

export const HouzzIcon = ({
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
    <path d="M12,24V16L5.1,20V12H5.1V4L12,0V8L5.1,12L12,16V8L18.9,4V12H18.9V20L12,24Z" />
  </svg>
)
