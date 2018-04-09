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
    <path d="M5,4H19C20.66,4 22,5.34 22,7V11H15V10H9V11H2V7C2,5.34 3.34,4 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z" />
  </svg>
)
