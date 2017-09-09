import React from 'react'

const DEFAULT_SIZE = 24

export const RaspberrypiIcon = ({
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
    <path d="M20,8H22V10H20V8M4,5H20C21.1,5 22,5.9 22,7H19V9H5V13H8V16H19V17H22C22,18.1 21.1,19 20,19H16V20H14V19H11V20H7V19H4C2.9,19 2,18.1 2,17V7C2,5.9 2.9,5 4,5M19,15H9V10H19V11H22V13H19V15M13,12V14H15V12H13M5,6V8H6V6H5M7,6V8H8V6H7M9,6V8H10V6H9M11,6V8H12V6H11M13,6V8H14V6H13M15,6V8H16V6H15M20,14H22V16H20V14Z" />
  </svg>
)