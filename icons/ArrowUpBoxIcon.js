import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowUpBoxIcon = ({
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
    <path d="M21,19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.11,3 21,3.9 21,5V19M13,18V9.5L16.5,13L17.92,11.58L12,5.66L6.08,11.58L7.5,13L11,9.5V18H13Z" />
  </svg>
)
