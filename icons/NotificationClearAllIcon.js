import React from 'react'

const DEFAULT_SIZE = 24

export const NotificationClearAllIcon = ({
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
    <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7" />
  </svg>
)
