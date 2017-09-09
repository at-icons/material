import React from 'react'

const DEFAULT_SIZE = 24

export const FlashlightOffIcon = ({
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
    <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15,18.27V22H9V12.27L2,5.27M18,5L15,10H11.82L6.82,5H18M18,4H6V2H18V4M15,11V13.18L12.82,11H15Z" />
  </svg>
)
