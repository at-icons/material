import React from 'react'

const DEFAULT_SIZE = 24

export const FridgeFilledBottomIcon = ({
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
    <path d="M8,8V6H10V8H8M7,2H17C18.1,2 19,2.9 19,4V19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V4C5,2.9 5.9,2 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z" />
  </svg>
)
