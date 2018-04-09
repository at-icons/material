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
    <path d="M6.59,3.41L2,8L6.59,12.6L8,11.18L4.82,8L8,4.82L6.59,3.41M12.41,3.41L11,4.82L14.18,8L11,11.18L12.41,12.6L17,8L12.41,3.41M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13L21.59,11.59Z" />
  </svg>
)
