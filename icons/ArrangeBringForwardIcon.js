import React from 'react'

const DEFAULT_SIZE = 24

export const ArrangeBringForwardIcon = ({
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
    <path d="M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z" />
  </svg>
)
