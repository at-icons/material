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
    <path d="M20,18.69L7.84,6.14L5.27,3.5L4,4.76L6.8,7.56V7.57C6.28,8.56 6,9.73 6,11V16L4,18V19H17.73L19.73,21L21,19.72L20,18.69M12,22C13.11,22 14,21.11 14,20H10C10,21.11 10.89,22 12,22M18,14.68V11C18,7.92 16.36,5.36 13.5,4.68V4C13.5,3.17 12.83,2.5 12,2.5C11.17,2.5 10.5,3.17 10.5,4V4.68C10.35,4.71 10.21,4.76 10.08,4.8C10,4.83 9.88,4.87 9.78,4.91L9.75,4.92C9.5,5 9.29,5.12 9.06,5.24L18,14.68Z" />
  </svg>
)
