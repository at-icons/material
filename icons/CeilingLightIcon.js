import React from 'react'

const DEFAULT_SIZE = 24

export const CeilingLightIcon = ({
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
    <path d="M8,9H11V4H13V9H16L20,17H4L8,9M14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18H14Z" />
  </svg>
)
