import React from 'react'

const DEFAULT_SIZE = 24

export const SigmaIcon = ({
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
    <path d="M5,4H18V9H17L16,6H10.06L13.65,11.13L9.54,17H16L17,15H18V20H5L10.6,12L5,4Z" />
  </svg>
)
