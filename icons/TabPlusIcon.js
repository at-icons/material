import React from 'react'

const DEFAULT_SIZE = 24

export const TabPlusIcon = ({
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
    <path d="M19,19V9H12V5H5V19H19M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.89 3.9,3 5,3H19M7,13H10V10H12V13H15V15H12V18H10V15H7V13Z" />
  </svg>
)
