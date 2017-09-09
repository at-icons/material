import React from 'react'

const DEFAULT_SIZE = 24

export const ScannerIcon = ({
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
    <path d="M19.8,10.7L4.2,5L3.5,6.9L17.6,12H5C3.9,12 3,12.9 3,14V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V12.5C21,11.7 20.5,10.9 19.8,10.7M7,17H5V15H7V17M19,17H9V15H19V17Z" />
  </svg>
)
