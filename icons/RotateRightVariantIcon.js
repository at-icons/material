import React from 'react'

const DEFAULT_SIZE = 24

export const RotateRightVariantIcon = ({
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
    <path d="M10,4V1L14,5L10,9V6C6.69,6 4,8.69 4,12L4.08,13H2.06L2,12C2,7.58 5.58,4 10,4M17,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H17C15.9,22 15,21.1 15,20V4C15,2.9 15.9,2 17,2M4,15H13V22H4C2.9,22 2,21.1 2,20V17C2,15.9 2.9,15 4,15Z" />
  </svg>
)
