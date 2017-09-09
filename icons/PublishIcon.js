import React from 'react'

const DEFAULT_SIZE = 24

export const PublishIcon = ({
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
    <path d="M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z" />
  </svg>
)
