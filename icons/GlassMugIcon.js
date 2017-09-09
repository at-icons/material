import React from 'react'

const DEFAULT_SIZE = 24

export const GlassMugIcon = ({
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
    <path d="M10,4V7H18V4H10M8,2H20L21,2V3L20,4V20L21,21V22H20L8,22H7V21L8,20V18.6L4.2,16.83C3.5,16.5 3,15.82 3,15V8C3,6.9 3.9,6 5,6H8V4L7,3V2H8M5,15L8,16.39V8H5V15Z" />
  </svg>
)
