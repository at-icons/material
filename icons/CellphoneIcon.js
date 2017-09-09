import React from 'react'

const DEFAULT_SIZE = 24

export const CellphoneIcon = ({
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
    <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.89 18.1,1 17,1Z" />
  </svg>
)
