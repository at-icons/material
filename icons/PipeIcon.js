import React from 'react'

const DEFAULT_SIZE = 24

export const PipeIcon = ({
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
    <path d="M22,14H20V16H14V13H16V11H14V6C14,4.9 13.1,4 12,4H4V2H2V10H4V8H10V11H8V13H10V18C10,19.1 10.9,20 12,20H20V22H22" />
  </svg>
)
