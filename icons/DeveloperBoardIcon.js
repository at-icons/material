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
    <path d="M22,9V7H20V5C20,3.9 19.1,3 18,3H4C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21H18C19.1,21 20,20.1 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z" />
  </svg>
)
