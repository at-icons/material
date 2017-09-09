import React from 'react'

const DEFAULT_SIZE = 24

export const GroupIcon = ({
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
    <path d="M8,8V12H13V8H8M1,1H5V2H19V1H23V5H22V19H23V23H19V22H5V23H1V19H2V5H1V1M5,19V20H19V19H20V5H19V4H5V5H4V19H5M6,6H15V10H18V18H8V14H6V6M15,14H10V16H16V12H15V14Z" />
  </svg>
)
