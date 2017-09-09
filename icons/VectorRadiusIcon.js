import React from 'react'

const DEFAULT_SIZE = 24

export const VectorRadiusIcon = ({
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
    <path d="M2,4H4V2H10V4C15.52,4 20,8.48 20,14H22V20H20V22H18V20H16V14H18C18,9.58 14.42,6 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z" />
  </svg>
)
