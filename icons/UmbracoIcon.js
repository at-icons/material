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
    <path d="M8.6,8.6L7.17,8.38C6.5,11.67 6.46,14.24 7.61,15.5C8.6,16.61 11.89,16.61 11.89,16.61C11.89,16.61 15.29,16.61 16.28,15.5C17.43,14.24 17.38,11.67 16.72,8.38L15.29,8.6C15.29,8.6 16.54,13.88 14.69,14.69C13.81,15.07 11.89,15.07 11.89,15.07C11.89,15.07 10.08,15.07 9.2,14.69C7.35,13.88 8.6,8.6 8.6,8.6M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3Z" />
  </svg>
)
