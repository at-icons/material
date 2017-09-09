import React from 'react'

const DEFAULT_SIZE = 24

export const SignDirectionIcon = ({
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
    <path d="M11,12H3.5L6,9.5L3.5,7H11V3L12,2L13,3V7H18L20.5,9.5L18,12H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V12Z" />
  </svg>
)
