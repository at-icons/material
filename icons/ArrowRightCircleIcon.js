import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowRightCircleIcon = ({
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
    <path d="M6,12H14.25L11,8.75L11.67,8L16.17,12.5L11.67,17L11,16.25L14.25,13H6V12M21,12.5C21,17.75 16.75,22 11.5,22C6.26,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3C16.75,3 21,7.25 21,12.5M20,12.5C20,7.81 16.19,4 11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.2,21 20,17.19 20,12.5Z" />
  </svg>
)
