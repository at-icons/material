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
    <path d="M13.5,12C12.67,12 12,12.67 12,13.5C12,14.33 12.67,15 13.5,15C14.33,15 15,14.33 15,13.5C15,12.67 14.33,12 13.5,12M13.5,3C18.19,3 22,6.58 22,11C22,12.62 22,14 21.09,16C17,16 16,20 12.5,20C10.32,20 9.27,18.28 9.05,16H9L8.24,16L6.96,20.3C6.81,20.79 6.33,21.08 5.84,21H3C2.45,21 2,20.55 2,20C2,19.45 2.45,19 3,19V16C2.45,16 2,15.55 2,15C2,14.45 2.45,14 3,14H6.75L7.23,12.39C6.72,12.14 6.13,12 5.5,12H5.07L5,11C5,6.58 8.81,3 13.5,3M5,16V19H5.26L6.15,16H5Z" />
  </svg>
)
