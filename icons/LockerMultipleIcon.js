import React from 'react'

const DEFAULT_SIZE = 24

export const LockerMultipleIcon = ({
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
    <path d="M3,2H21C22.1,2 23,2.9 23,4V20C23,21.1 22.1,22 21,22H3C1.9,22 1,21.1 1,20V4C1,2.9 1.9,2 3,2M13,4V20H21V4H13M3,4V20H11V4H3M5,13H7V17H5V13M5,6H9V7.5H5V6M5,9H9V10.5H5V9M15,13H17V17H15V13M15,6H19V7.5H15V6M15,9H19V10.5H15V9Z" />
  </svg>
)
