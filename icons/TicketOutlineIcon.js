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
    <path d="M4,4C2.9,4 2,4.9 2,6V10C3.1,10 4,10.9 4,12C4,13.1 3.1,14 2,14V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V14C20.9,14 20,13.1 20,12C20,10.9 20.9,10 22,10V6C22,4.9 21.1,4 20,4H4M4,6H20V8.54C18.76,9.25 18,10.57 18,12C18,13.43 18.76,14.75 20,15.46V18H4V15.46C5.24,14.75 6,13.43 6,12C6,10.57 5.24,9.25 4,8.54V6Z" />
  </svg>
)
