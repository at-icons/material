import React from 'react'

const DEFAULT_SIZE = 24

export const EmailAlertIcon = ({
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
    <path d="M16,9V7L10,11L4,7V9L10,13L16,9M16,5C17.1,5 18,5.9 18,7V16C18,17.1 17.1,18 16,18H4C2.89,18 2,17.1 2,16V7C2,5.9 2.9,5 4,5H16M20,12V7H22V12H20M20,16V14H22V16H20Z" />
  </svg>
)
