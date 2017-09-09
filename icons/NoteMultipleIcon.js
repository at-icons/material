import React from 'react'

const DEFAULT_SIZE = 24

export const NoteMultipleIcon = ({
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
    <path d="M16,9H21.5L16,3.5V9M7,2H17L23,8V18C23,19.1 22.1,20 21,20H7C5.89,20 5,19.1 5,18V4C5,2.9 5.9,2 7,2M3,6V22H21V24H3C1.9,24 1,23.1 1,22V6H3Z" />
  </svg>
)
