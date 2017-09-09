import React from 'react'

const DEFAULT_SIZE = 24

export const HeadphonesIcon = ({
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
    <path d="M12,1C7,1 3,5 3,10V17C3,18.66 4.34,20 6,20H9V12H5V10C5,6.13 8.13,3 12,3C15.87,3 19,6.13 19,10V12H15V20H18C19.66,20 21,18.66 21,17V10C21,5 16.97,1 12,1Z" />
  </svg>
)
