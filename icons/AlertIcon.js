import React from 'react'

const DEFAULT_SIZE = 24

export const AlertIcon = ({
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
    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
  </svg>
)
