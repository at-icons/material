import React from 'react'

const DEFAULT_SIZE = 24

export const ImageAlbumIcon = ({
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
    <path d="M6,19L9,15.14L11.14,17.72L14.14,13.86L18,19H6M6,4H11V12L8.5,10.5L6,12M18,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2Z" />
  </svg>
)
