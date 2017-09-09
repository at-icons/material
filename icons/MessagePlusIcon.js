import React from 'react'

const DEFAULT_SIZE = 24

export const MessagePlusIcon = ({
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
    <path d="M20,2C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z" />
  </svg>
)
