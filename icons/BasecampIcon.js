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
    <path d="M2,16.25C2,16.25 4,3.75 12,3.75C20,3.75 22,16.25 22,16.25C22,16.25 20,20.25 12,20.25C4,20.25 2,16.25 2,16.25M3.35,15.65C3.35,15.65 4.3,19 12,19C17,19 20,17.8 20.65,15.85C21.3,13.9 15.65,7.6 14.65,7.6C13.65,7.6 11.2,12 10.45,12C8.45,12 8.9,10 7.15,10C5.4,10 3.35,15.65 3.35,15.65Z" />
  </svg>
)
