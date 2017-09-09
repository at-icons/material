import React from 'react'

const DEFAULT_SIZE = 24

export const FlattrIcon = ({
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
    <path d="M21,9V15C21,18.31 18.31,21 15,21H4.41L11.07,14.35C11.38,14.04 11.69,13.73 11.84,13.75C12,13.78 12,14.14 12,14.5V17H14C15.66,17 17,15.66 17,14V8.41L21,4.41V9M3,15V9C3,5.69 5.69,3 9,3H19.59L12.93,9.65C12.62,9.96 12.31,10.27 12.16,10.25C12,10.22 12,9.86 12,9.5V7H10C8.34,7 7,8.34 7,10V15.59L3,19.59V15Z" />
  </svg>
)
