import React from 'react'

const DEFAULT_SIZE = 24

export const LaptopChromebookIcon = ({
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
    <path d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z" />
  </svg>
)
