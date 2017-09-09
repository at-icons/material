import React from 'react'

const DEFAULT_SIZE = 24

export const MonitorMultipleIcon = ({
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
    <path d="M22,17V7H6V17H22M22,5C23.1,5 24,5.9 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7C4,5.9 4.9,5 6,5H22M2,3V15H0V3C0,1.9 0.9,1 2,1H20V3H2Z" />
  </svg>
)
