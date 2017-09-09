import React from 'react'

const DEFAULT_SIZE = 24

export const FormatAlignMiddleIcon = ({
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
    <path d="M13,6L15,4L16.42,5.42L12,9.84L7.58,5.42L9,4L11,6V2H13V6M3,11H21V13H3V11M13,18V22H11V18L9,20L7.58,18.58L12,14.16L16.42,18.58L15,20L13,18Z" />
  </svg>
)
