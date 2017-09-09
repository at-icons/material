import React from 'react'

const DEFAULT_SIZE = 24

export const ParkingIcon = ({
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
    <path d="M13.2,11H10V7H13.2C14.3,7 15.2,7.9 15.2,9C15.2,10.1 14.3,11 13.2,11M13,3H6V21H10V15H13C16.31,15 19,12.31 19,9C19,5.68 16.31,3 13,3Z" />
  </svg>
)
