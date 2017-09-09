import React from 'react'

const DEFAULT_SIZE = 24

export const FilePowerpointIcon = ({
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
    <path d="M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M13,3.5V9H18.5L13,3.5M8,11V13H9V19H8V20H12V19H11V17H13C14.66,17 16,15.66 16,14C16,12.34 14.66,11 13,11H8M13,13C13.55,13 14,13.45 14,14C14,14.55 13.55,15 13,15H11V13H13Z" />
  </svg>
)
