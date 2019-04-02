import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M8,7V17H15V7H8M11.16,16V12.87H9.41L11.91,8V11.14H13.59L11.16,16M16,2V6H7V2C7,1.45 7.45,1 8,1H15C15.55,1 16,1.45 16,2M16,18V22C16,22.55 15.55,23 15,23H8C7.45,23 7,22.55 7,22V18H16Z" />
  </svg>
)
