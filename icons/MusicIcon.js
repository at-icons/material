import React from 'react'

const DEFAULT_SIZE = 24

export const MusicIcon = ({
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
    <path d="M21,3V15.5C21,17.43 19.43,19 17.5,19C15.57,19 14,17.43 14,15.5C14,13.57 15.57,12 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5C9,19.43 7.43,21 5.5,21C3.57,21 2,19.43 2,17.5C2,15.57 3.57,14 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
  </svg>
)
