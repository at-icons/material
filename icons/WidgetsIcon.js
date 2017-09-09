import React from 'react'

const DEFAULT_SIZE = 24

export const WidgetsIcon = ({
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
    <path d="M3,3H11V7.34L16.66,1.69L22.31,7.34L16.66,13H21V21H13V13H16.66L11,7.34V11H3V3M3,13H11V21H3V13Z" />
  </svg>
)
