import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H7V20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7H16V3C16,1.89 15.11,1 14,1H3M3,3H14V9H20V20H9V14H3V3Z" />
  </svg>
)
