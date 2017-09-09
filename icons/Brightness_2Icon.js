import React from 'react'

const DEFAULT_SIZE = 24

export const Brightness_2Icon = ({
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
    <path d="M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22C15.52,22 20,17.52 20,12C20,6.48 15.52,2 10,2Z" />
  </svg>
)
