import React from 'react'

const DEFAULT_SIZE = 24

export const BinocularsIcon = ({
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
    <path d="M11,6H13V13H11V6M9,20C9,20.55 8.55,21 8,21H5C4.45,21 4,20.55 4,20V15L6,6H10V13C10,13.55 9.55,14 9,14V20M10,5H7V3H10V5M15,20V14C14.45,14 14,13.55 14,13V6H18L20,15V20C20,20.55 19.55,21 19,21H16C15.45,21 15,20.55 15,20M14,5V3H17V5H14Z" />
  </svg>
)
