import React from 'react'

const DEFAULT_SIZE = 24

export const ServerIcon = ({
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
    <path d="M4,1H20C20.55,1 21,1.45 21,2V6C21,6.55 20.55,7 20,7H4C3.45,7 3,6.55 3,6V2C3,1.45 3.45,1 4,1M4,9H20C20.55,9 21,9.45 21,10V14C21,14.55 20.55,15 20,15H4C3.45,15 3,14.55 3,14V10C3,9.45 3.45,9 4,9M4,17H20C20.55,17 21,17.45 21,18V22C21,22.55 20.55,23 20,23H4C3.45,23 3,22.55 3,22V18C3,17.45 3.45,17 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
  </svg>
)
