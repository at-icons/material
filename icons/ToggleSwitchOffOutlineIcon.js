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
    <path d="M7,10C8.1,10 9,10.9 9,12C9,13.1 8.1,14 7,14C5.9,14 5,13.1 5,12C5,10.9 5.9,10 7,10M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7H17M7,9C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H17C18.66,15 20,13.66 20,12C20,10.34 18.66,9 17,9H7Z" />
  </svg>
)
