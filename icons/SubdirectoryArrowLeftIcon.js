import React from 'react'

const DEFAULT_SIZE = 24

export const SubdirectoryArrowLeftIcon = ({
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
    <path d="M11,9L12.42,10.42L8.83,14H18V4H20V16H8.83L12.42,19.58L11,21L5,15L11,9Z" />
  </svg>
)
