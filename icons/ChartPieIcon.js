import React from 'react'

const DEFAULT_SIZE = 24

export const ChartPieIcon = ({
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
    <path d="M21,11H13V3C17.42,3 21,6.58 21,11M19,13C19,15.78 17.58,18.23 15.43,19.67L11.58,13H19M11,21C8.22,21 5.77,19.58 4.33,17.43L10.82,13.68L14.56,20.17C13.5,20.7 12.28,21 11,21M3,13C3,8.58 6.58,5 11,5V12.42L3.83,16.56C3.3,15.5 3,14.28 3,13Z" />
  </svg>
)
