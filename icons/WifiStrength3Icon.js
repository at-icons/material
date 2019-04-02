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
    <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C16.08,16.42 20.24,11.24 23.65,7C20.32,4.41 16.22,3 12,3M12,5C15.07,5 18.09,5.86 20.71,7.45L18.77,9.88C17.26,9 14.88,8 12,8C9,8 6.68,9 5.21,9.84L3.27,7.44C5.91,5.85 8.93,5 12,5Z" />
  </svg>
)
