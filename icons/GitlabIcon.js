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
    <path d="M3.16,10L12,21.5L2.32,14.3C2.05,14.09 1.94,13.75 2.04,13.44L3.16,10M6.11,3.17C6,2.83 5.5,2.83 5.37,3.17L3.16,10H8.32L6.11,3.17M8.32,10L12,21.5L15.68,10H8.32M21.96,13.44L20.84,10L12,21.5L21.68,14.3C21.95,14.09 22.06,13.75 21.96,13.44M18.63,3.17C18.5,2.83 18,2.83 17.89,3.17L15.68,10H20.84L18.63,3.17Z" />
  </svg>
)
