import React from 'react'

const DEFAULT_SIZE = 24

export const Numeric_5BoxOutlineIcon = ({
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
    <path d="M15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H9V13H13V15H9V17H13C14.1,17 15,16.1 15,15M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z" />
  </svg>
)
