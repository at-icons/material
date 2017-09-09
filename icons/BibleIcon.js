import React from 'react'

const DEFAULT_SIZE = 24

export const BibleIcon = ({
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
    <path d="M5.81,2H7V9L9.5,7.5L12,9V2H18C19.1,2 20,2.9 20,4V20C20,21.05 19.05,22 18,22H6C4.95,22 4,21.05 4,20V4C4,3 4.83,2.09 5.81,2M13,10V13H10V15H13V20H15V15H18V13H15V10H13Z" />
  </svg>
)
