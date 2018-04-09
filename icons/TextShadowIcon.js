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
    <path d="M3,3H16V6H11V18H8V6H3V3M12,7H14V9H12V7M15,7H17V9H15V7M18,7H20V9H18V7M12,10H14V12H12V10M12,13H14V15H12V13M12,16H14V18H12V16M12,19H14V21H12V19Z" />
  </svg>
)
