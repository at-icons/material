import React from 'react'

const DEFAULT_SIZE = 24

export const TabUnselectedIcon = ({
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
    <path d="M15,21H17V19H15M11,21H13V19H11M19,13H21V11H19M19,21C20.1,21 21,20.1 21,19H19M7,5H9V3H7M19,17H21V15H19M19,3H11V9H21V5C21,3.89 20.1,3 19,3M5,21V19H3C3,20.1 3.9,21 5,21M3,17H5V15H3M7,21H9V19H7M3,5H5V3C3.89,3 3,3.89 3,5M3,13H5V11H3M3,9H5V7H3V9Z" />
  </svg>
)
