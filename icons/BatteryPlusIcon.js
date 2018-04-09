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
    <path d="M16.67,4C17.4,4 18,4.6 18,5.33V20.67C18,21.4 17.4,22 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33C6,4.6 6.6,4 7.33,4H9V2H15V4H16.67M16,14V12H13V9H11V12H8V14H11V17H13V14H16Z" />
  </svg>
)
