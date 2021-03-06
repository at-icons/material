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
    <path d="M20,6H16V4C16,2.9 15.1,2 14,2H10C8.89,2 8,2.89 8,4V6H4C2.89,6 2,6.89 2,8V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V8C22,6.9 21.1,6 20,6M10,4H14V6H10V4M12,9C13.38,9 14.5,10.12 14.5,11.5C14.5,12.88 13.38,14 12,14C10.62,14 9.5,12.88 9.5,11.5C9.5,10.12 10.62,9 12,9M17,19H7V17.75C7,16.37 9.24,15.25 12,15.25C14.76,15.25 17,16.37 17,17.75V19Z" />
  </svg>
)
