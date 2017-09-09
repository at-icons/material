import React from 'react'

const DEFAULT_SIZE = 24

export const TruckTrailerIcon = ({
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
    <path d="M22,15V17H10C10,18.66 8.66,20 7,20C5.34,20 4,18.66 4,17H2V6C2,4.9 2.9,4 4,4H17C18.1,4 19,4.9 19,6V15H22M7,16C6.45,16 6,16.45 6,17C6,17.55 6.45,18 7,18C7.55,18 8,17.55 8,17C8,16.45 7.55,16 7,16Z" />
  </svg>
)
