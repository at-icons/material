import React from 'react'

const DEFAULT_SIZE = 24

export const CurrencyChfIcon = ({
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
    <path d="M7,3H18V5H9V11H17V13H9V16H11V18H9V21H7V18H5V16H7V3Z" />
  </svg>
)
