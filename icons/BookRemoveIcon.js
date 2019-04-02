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
    <path d="M18,22H6C4.9,22 4,21.1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22M16.41,19.83L17.83,18.41L16.41,17L17.83,15.59L16.41,14.17L15,15.59L13.59,14.17L12.17,15.59L13.59,17L12.17,18.41L13.59,19.83L15,18.41L16.41,19.83Z" />
  </svg>
)
