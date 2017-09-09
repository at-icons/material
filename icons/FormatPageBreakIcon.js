import React from 'react'

const DEFAULT_SIZE = 24

export const FormatPageBreakIcon = ({
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
    <path d="M7,11H9V13H7V11M11,11H13V13H11V11M19,17H15V11.17L21,17.17V22H3V13H5V20H19V17M3,2H21V11H19V4H5V11H3V2Z" />
  </svg>
)
