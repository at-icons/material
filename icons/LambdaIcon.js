import React from 'react'

const DEFAULT_SIZE = 24

export const LambdaIcon = ({
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
    <path d="M6,20L10.16,7.91L9.34,6H8V4H10C10.42,4 10.78,4.26 10.93,4.63L16.66,18H18V20H16C15.57,20 15.21,19.73 15.07,19.36L11.33,10.65L8.12,20H6Z" />
  </svg>
)
