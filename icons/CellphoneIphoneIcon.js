import React from 'react'

const DEFAULT_SIZE = 24

export const CellphoneIphoneIcon = ({
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
    <path d="M16,18H7V4H16M11.5,22C10.67,22 10,21.33 10,20.5C10,19.67 10.67,19 11.5,19C12.33,19 13,19.67 13,20.5C13,21.33 12.33,22 11.5,22M15.5,1H7.5C6.12,1 5,2.12 5,3.5V20.5C5,21.88 6.12,23 7.5,23H15.5C16.88,23 18,21.88 18,20.5V3.5C18,2.12 16.88,1 15.5,1Z" />
  </svg>
)
