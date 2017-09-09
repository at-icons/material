import React from 'react'

const DEFAULT_SIZE = 24

export const TumblrReblogIcon = ({
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
    <path d="M3.75,17L8,12.75V16H18V11.5L20,9.5V16C20,17.1 19.1,18 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8C4,6.9 4.9,6 6,6H16V2.75L20.25,7Z" />
  </svg>
)
