import React from 'react'

const DEFAULT_SIZE = 24

export const FormatParagraphIcon = ({
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
    <path d="M13,4C15.21,4 17,5.79 17,8C17,10.21 15.21,12 13,12H11V18H9V4H13M13,10C14.1,10 15,9.1 15,8C15,6.9 14.1,6 13,6H11V10H13Z" />
  </svg>
)
