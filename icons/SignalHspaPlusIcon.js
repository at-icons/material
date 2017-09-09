import React from 'react'

const DEFAULT_SIZE = 24

export const SignalHspaPlusIcon = ({
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
    <path d="M19,8V11H22V14H19V17H16V14H13V11H16V8H19M5,10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z" />
  </svg>
)
