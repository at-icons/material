import React from 'react'

const DEFAULT_SIZE = 24

export const CellphoneAndroidIcon = ({
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
    <path d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8C6.34,1 5,2.34 5,4V20C5,21.66 6.34,23 8,23H16C17.66,23 19,21.66 19,20V4C19,2.34 17.66,1 16,1Z" />
  </svg>
)
